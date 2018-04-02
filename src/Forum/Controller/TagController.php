<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Tags\Forum\Controller;

use Flarum\Forum\Controller\FrontendController;
use Flarum\Forum\Frontend;
use Flarum\Foundation\Application;
use Flarum\Tags\TagRepository;
use Illuminate\Contracts\Events\Dispatcher;
use Psr\Http\Message\ServerRequestInterface as Request;
use Symfony\Component\Translation\TranslatorInterface;

class TagController extends FrontendController
{
    /**
     * @var TagRepository
     */
    protected $tags;

    /**
     * {@inheritdoc}
     */
    public function __construct(Frontend $webApp, Dispatcher $events, TagRepository $tags)
    {
        parent::__construct($webApp, $events);
        $this->tags = $tags;
    }

    /**
     * {@inheritdoc}
     */
    protected function getView(Request $request)
    {
        $view = parent::getView($request);
        $id = $this->tags->getIdForSlug(array_get($request->getQueryParams(), 'slug'));
        $actor = $request->getAttribute('actor');
        $tag = $this->tags->findOrFail($id, $actor);

        $description = $tag->description;
        if ($description == null) {
            $app = Application::getInstance();
            $translator = $app->make(TranslatorInterface::class);
            $description = $translator->trans('flarum-tags.forum.meta_description.discussions_tagged_text', ['{tag}' => $tag->name]);
        }
        $view->description = $description;

        return $view;
    }
}
