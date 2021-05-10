<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Tests\integration\api\discussions;

use Flarum\Group\Group;
use Flarum\Tags\Tests\integration\RetrievesRepresentativeTags;
use Flarum\Testing\integration\RetrievesAuthorizedUsers;
use Flarum\Testing\integration\TestCase;
use Illuminate\Support\Arr;

class ListTest extends TestCase
{
    use RetrievesAuthorizedUsers;
    use RetrievesRepresentativeTags;

    /**
     * @inheritDoc
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('flarum-tags');

        $this->prepareDatabase([
            'tags' => $this->tags(),
            'users' => [
                $this->normalUser(),
            ],
            'group_permission' => [
                ['group_id' => Group::MEMBER_ID, 'permission' => 'tag5.viewDiscussions'],
                ['group_id' => Group::MEMBER_ID, 'permission' => 'tag8.viewDiscussions'],
                ['group_id' => Group::MEMBER_ID, 'permission' => 'tag13.viewDiscussions'],
            ],
            'discussions' => [
                ['id' => 1, 'title' => 'Allowed All', 'user_id' => 2, 'first_post_id' => 1, 'comment_count' => 1],
                ['id' => 2, 'title' => 'Allowed child but not parent', 'user_id' => 2, 'first_post_id' => 1, 'comment_count' => 1],
                ['id' => 3, 'title' => 'Allowed parent but not child', 'user_id' => 2, 'first_post_id' => 1, 'comment_count' => 1],
                ['id' => 4, 'title' => 'Restricted Secondary', 'user_id' => 2, 'first_post_id' => 1, 'comment_count' => 1],
            ],
            'posts' => [
                ['id' => 1, 'discussion_id' => 1, 'user_id' => 2, 'type' => 'comment', 'content' => '<t><p>Text</p></t>'],
                ['id' => 2, 'discussion_id' => 2, 'user_id' => 2, 'type' => 'comment', 'content' => '<t><p>Text</p></t>'],
                ['id' => 3, 'discussion_id' => 3, 'user_id' => 2, 'type' => 'comment', 'content' => '<t><p>Text</p></t>'],
                ['id' => 4, 'discussion_id' => 4, 'user_id' => 2, 'type' => 'comment', 'content' => '<t><p>Text</p></t>'],
            ],
            'discussion_tag' => [
                ['discussion_id' => 1, 'tag_id' => 1],
                ['discussion_id' => 1, 'tag_id' => 10],
                ['discussion_id' => 2, 'tag_id' => 6],
                ['discussion_id' => 2, 'tag_id' => 8],
                ['discussion_id' => 3, 'tag_id' => 12],
                ['discussion_id' => 3, 'tag_id' => 13],
                ['discussion_id' => 4, 'tag_id' => 1],
                ['discussion_id' => 4, 'tag_id' => 11],
            ]
        ]);
    }

    /**
     * @test
     */
    public function admin_can_see_all_discussions()
    {
        $response = $this->send(
            $this->request('GET', '/api/discussions', [
                'authenticatedAs' => 1,
            ])
        );

        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody()->getContents(), true);

        $ids = Arr::pluck($data['data'], 'id');
        $this->assertEquals(['1', '2', '3', '4'], $ids);
    }

    /**
     * @test
     */
    public function user_cant_see_discussions_with_restrictions()
    {
        $response = $this->send(
            $this->request('GET', '/api/discussions', [
                'authenticatedAs' => 2,
            ])
        );

        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody()->getContents(), true);

        $ids = Arr::pluck($data['data'], 'id');
        $this->assertEquals(['1'], $ids);
    }
}
