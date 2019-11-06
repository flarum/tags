<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Tags\Api\Controller;

use Flarum\Tags\Tag;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\EmptyResponse;

class OrderTagsController implements RequestHandlerInterface
{
    use AssertPermissionTrait;

    /**
     * {@inheritdoc}
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $this->assertAdmin($request->getAttribute('actor'));

        $order = array_get($request->getParsedBody(), 'order');

        if ($order === null) {
            return new EmptyResponse(422);
        }

        Tag::query()->update([
            'position' => null,
            'parent_id' => null
        ]);

        foreach ($order as $i => $tag) {
            $this->orderTag(Arr::get($tag, 'id'), $i, null, Arr::get($tag, 'children'));
        }

        return new EmptyResponse(204);
    }

    private function orderTag(int $tagId, int $position, Tag $parent = null, array $children = [])
    {
        $tag = Tag::findOrFail($tagId);
        $tag->position = $position;
        $tag->parent_id = optional($parent)->id;
        $tag->save();

        foreach($children as $j => $child) {
            $this->orderTag($child['id'], $j, $tag, Arr::get($child, 'children'));
        }
    }
}
