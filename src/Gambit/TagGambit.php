<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Gambit;

use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\AbstractSearch;
use Flarum\Tags\TagRepository;

class TagGambit extends AbstractRegexGambit
{
    /**
     * {@inheritdoc}
     */
    protected $pattern = 'tag:(.+)';

    /**
     * @var TagRepository
     */
    protected $tags;

    /**
     * @param TagRepository $tags
     */
    public function __construct(TagRepository $tags)
    {
        $this->tags = $tags;
    }

    /**
     * Returns a single column query with all discussion IDs which belongs to a child tag the
     * user has hidden.
     *
     * @param int $userId
     * @param array|null $excludeTags
     * @return \Illuminate\Database\Eloquent\Builder
     */
    private function getDiscussionIdsWithHiddenSubscriptionChildTagsQry(int $userId, array $excludeTags = null)
    {
        $query = $this->tags->query();
        $query->select('discussion_tag.discussion_id')
            ->from('discussion_tag')
            ->join('tag_user', 'tag_user.tag_id', '=', 'discussion_tag.tag_id')
            ->join('tags', 'tag_user.tag_id', '=', 'tags.id')
            ->where('tag_user.user_id', '=', $userId)
            ->where('tag_user.subscription', 'hide')
            ->whereNotNull('tags.parent_id');

        if ($excludeTags !== null) {
            $query->whereNotIn('tags.slug', $excludeTags);
        }

        return $query;
    }

    /**
     * {@inheritdoc}
     */
    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        $slugs = explode(',', trim($matches[1], '"'));

        $actor = $search->getActor();

        $discussionsWithHiddenSubChildTags = $this->getDiscussionIdsWithHiddenSubscriptionChildTagsQry($actor->id, $slugs);

        $query = $search->getQuery();

        $query->whereNotIn('discussions.id', $discussionsWithHiddenSubChildTags)
            ->where(function ($query) use ($slugs, $negate) {
                foreach ($slugs as $slug) {
                    if ($slug === 'untagged') {
                        $query->orWhereIn('discussions.id', function ($query) {
                            $query->selectRaw('discussion_id')
                                ->from('discussion_tag');
                        }, ! $negate);
                    } else {
                        $id = $this->tags->getIdForSlug($slug);

                        $query->orWhereIn('discussions.id', function ($query) use ($id) {
                            $query->selectRaw('discussion_id')
                                ->from('discussion_tag')
                                ->where('tag_id', $id);
                        }, $negate);
                    }
                }
            });
    }
}
