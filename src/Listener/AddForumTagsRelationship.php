<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Listener;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\GetApiRelationship;
use Flarum\Tags\Tag;
use Illuminate\Contracts\Events\Dispatcher;

class AddForumTagsRelationship
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'loadTagsRelationship']);
        $events->listen(WillGetData::class, [$this, 'includeTagsRelationship']);
    }

    /**
     * @param GetApiRelationship $event
     * @return \Tobscure\JsonApi\Relationship|null
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(ForumSerializer::class, 'tags')) {
            return $event->serializer->hasMany($event->model, 'Flarum\Tags\Api\Serializer\TagSerializer', 'tags');
        }
    }

    /**
     * @param WillSerializeData $event
     */
    public function loadTagsRelationship(WillSerializeData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->data['tags'] = Tag::query()
                ->where(function ($query) use ($event) {
                    $query
                        ->where(function ($query) {
                            $query
                                ->whereNull('parent_id')
                                ->whereNotNull('position');
                        })
                        ->orWhereIn(
                            Tag::whereVisibleTo($event->actor)
                                ->select('id')
                                ->withCount('discussions')
                                ->whereNull('parent_id')
                                ->whereNull('position')
                                ->orderBy('discussions_count', 'desc')
                                ->limit(3)
                        );
                })
                ->whereVisibleTo($event->actor)
                ->withStateFor($event->actor)
                ->with(['parent', 'lastPostedDiscussion'])
                ->get();
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeTagsRelationship(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude(['tags', 'tags.lastPostedDiscussion', 'tags.parent']);
        }
    }
}
