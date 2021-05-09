<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Access;

use Flarum\Tags\Tag;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class TagPolicy extends AbstractPolicy
{
    public function can(User $actor, string $ability, Tag $tag)
    {
        if ($tag->is_restricted) {
            return Tag::queryIdsWhereHasPermission($actor, $ability)->where('id', $tag->id)->count() !== 0;
        }
    }

    public function addToDiscussion(User $actor, Tag $tag)
    {
        return $actor->can('startDiscussion', $tag);
    }
}
