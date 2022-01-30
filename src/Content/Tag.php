<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Content;

use Flarum\Api\Client;
use Flarum\Frontend\Document;
use Flarum\Http\RequestUtil;
use Flarum\Tags\TagRepository;
use Illuminate\Contracts\View\Factory;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Flarum\Forum\Content\Index;

class Tag
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
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @var Index
     */
    protected $params;

    /**
     * @param Client $api
     * @param Factory $view
     * @param TagRepository $tags
     * @param TranslatorInterface $translator
     */
    public function __construct(Client $api, Factory $view, TagRepository $tags, TranslatorInterface $translator, Index $params)
    {
        $this->api = $api;
        $this->view = $view;
        $this->tags = $tags;
        $this->translator = $translator;
        $this->params = $params;

    }

    public function __invoke(Document $document, Request $request)
    {
        $queryParams = $request->getQueryParams();
        $tagId = $this->tags->getIdForSlug($slug);
        $tag = $this->tags->findOrFail($tagId, $actor);
        $actor = RequestUtil::getActor($request);
        $page = max(1, intval(Arr::pull($queryParams, 'page')));

        $slug = Arr::pull($queryParams, 'slug');

        $paramArray = $this->params->generateParams($queryParams); # return array of paramters in herited from index
        $paramArray['filter']['tag'] = $slug;


        $apiDocument = $this->params->getApiDocument($request, $paramArray); # calls protected method in index

        $tagsDocument = $this->getTagsDocument($request, $slug);

        $apiDocument->included[] = $tagsDocument->data;
        $includedTags = $tagsDocument->included ?? [];
        foreach ((array) $includedTags as $includedTag) {
            $apiDocument->included[] = $includedTag;
        }

        $document->title = $tag->name;
        if ($tag->description) {
            $document->meta['description'] = $tag->description;
        } else {
            $document->meta['description'] = $this->translator->trans('flarum-tags.forum.tag.meta_description_text', ['{tag}' => $tag->name]);
        }
        $document->content = $this->view->make('tags::frontend.content.tag', compact('apiDocument', 'page', 'tag'));
        $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    /**
     * Get a map of sort query param values and their API sort params.
     *
     * @return array
     */
    private function getSortMap()
    {
        return [
            'latest' => '-lastPostedAt',
            'top' => '-commentCount',
            'newest' => '-createdAt',
            'oldest' => 'createdAt'
        ];
    }

  

    private function getTagsDocument(Request $request, string $slug)
    {
        return json_decode($this->api->withParentRequest($request)->withQueryParams([
            'include' => 'children,children.parent,parent,parent.children.parent,state'
        ])->get("/tags/$slug")->getBody());
    }
}
