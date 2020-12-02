<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Access;

use Flarum\Discussion\Discussion;
use Flarum\Event\ScopeModelVisibility;
use Flarum\Tags\Tag;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Database\Eloquent\Builder;

class DiscussionScopePolicy extends AbstractPolicy
{
    /**
     * {@inheritdoc}
     */
    protected $model = Discussion::class;

    /**
     * @var Dispatcher
     */
    protected $events;

    /**
     * @param Dispatcher $events
     */
    public function __construct(Dispatcher $events)
    {
        $this->events = $events;
    }

    /**
     * @param User $actor
     * @param Builder $query
     */
    public function find(User $actor, Builder $query)
    {
        // Hide discussions which have tags that the user is not allowed to see, unless an extension overrides this.
        $query->where(function ($query) use ($actor) {
            $query
                ->whereNotIn('discussions.id', function ($query) use ($actor) {
                    return $query->select('discussion_id')
                        ->from('discussion_tag')
                        ->whereIn('tag_id', Tag::getIdsWhereCannot($actor, 'viewDiscussions'));
                })
                ->orWhere(function ($query) use ($actor) {
                    $this->events->dispatch(
                        new ScopeModelVisibility($query, $actor, 'viewDiscussionsInRestrictedTags')
                    );
                });
        });

        // Hide discussions with no tags if the user doesn't have that global
        // permission.
        if (! $actor->hasPermission('viewDiscussions')) {
            $query->has('tags');
        }
    }

    /**
     * @param User $actor
     * @param Builder $query
     * @param string $ability
     */
    public function findWithPermission(User $actor, Builder $query, $ability)
    {
        // If a discussion requires a certain permission in order for it to be
        // visible, then we can check if the user has been granted that
        // permission for any of the discussion's tags.
        $query->whereIn('discussions.id', function ($query) use ($actor, $ability) {
            return $query->select('discussion_id')
                ->from('discussion_tag')
                ->whereIn('tag_id', Tag::getIdsWhereCan($actor, 'discussion.'.$ability));
        });
    }
}
