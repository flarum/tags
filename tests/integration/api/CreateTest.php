<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Tests\integration\api\users;

use Flarum\Testing\integration\RetrievesAuthorizedUsers;
use Flarum\Testing\integration\TestCase;

class CreateTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    /**
     * @inheritDoc
     */
    protected function setUp()
    {
        parent::setUp();

        $this->extension('flarum-tags');

        $this->prepareDatabase([
            'users' => [
                $this->normalUser(),
            ],
        ]);
    }

    /**
     * @test
     */
    public function mormal_user_cant_create_tag()
    {
        $response = $this->send(
            $this->request(
                'POST',
                '/api/tags',
                ['authenticatedAs' => 2]
            )
        );

        $this->assertEquals(403, $response->getStatusCode());
    }
}
