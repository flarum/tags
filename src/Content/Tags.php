<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Tags\Content;

use Flarum\Api\Client;
use Flarum\Frontend\Document;
use Flarum\Tags\TagRepository;
use Illuminate\Contracts\View\Factory;
use Psr\Http\Message\ServerRequestInterface as Request;

class Tags
{
    /**
     * @var Client
     */
    protected $api;

    /**
     * @var Factory
     */
    protected $view;

    /**
     * @var TagRepository
     */
    protected $tags;

    /**
     * @param Client $api
     * @param Factory $view
     */
    public function __construct(Client $api, Factory $view, TagRepository $tags)
    {
        $this->api = $api;
        $this->view = $view;
        $this->tags = $tags;
    }

    public function __invoke(Document $document, Request $request)
    {
        $tags = collect($document->payload['resources'])->where('type', 'tags');

        $document->content = $this->view->make('tags::frontend.content.tags', compact('tags'));

        return $document;
    }
}
