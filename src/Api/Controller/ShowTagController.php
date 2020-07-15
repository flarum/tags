<?php

namespace Flarum\Tags\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Tag;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ShowTagController extends AbstractShowController
{
    public $serializer = TagSerializer::class;

    public $optionalInclude = ['parent', 'children'];
    /**
     * @var Tag
     */
    private $tags;

    public function __construct(Tag $tags)
    {
        $this->tags = $tags;
    }

    /**
     * @inheritDoc
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $slug = array_get($request->getQueryParams(), 'slug');
        $actor = $request->getAttribute('actor');
        $include = $this->extractInclude($request);

        return $this->tags
            ->whereVisibleTo($actor)
            ->with($include)
            ->where('slug', $slug)
            ->firstOrFail();
    }
}
