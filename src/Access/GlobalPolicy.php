<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Access;

use Flarum\Event\GetPermission;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Tags\Tag;
use Illuminate\Contracts\Events\Dispatcher;

class GlobalPolicy
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;


    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }


    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetPermission::class, [$this, 'grantGlobalDiscussionPermissions']);
    }

    /**
     * @param GetPermission $event
     * @return bool
     */
    public function grantGlobalDiscussionPermissions(GetPermission $event)
    {
        if (in_array($event->ability, ['viewDiscussions', 'startDiscussion']) && is_null($event->model)) {
            return count(Tag::getIdsWhereCan($event->actor, $event->ability, true, false)) >= $this->settings->get('min_primary_tags')
                || count(Tag::getIdsWhereCan($event->actor, $event->ability, false, true)) >= $this->settings->get('min_secondary_tags');
        }
    }
}
