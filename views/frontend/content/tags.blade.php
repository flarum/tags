@inject('url', 'Flarum\Http\UrlGenerator')

<div class="container">
    <h2>{{ $translator->trans('flarum-tags.forum.index.tags_link') }}</h2>

    @php($primaryTags = $tags->where('attributes.isChild', false)->where('attributes.position', '!==', NULL)->sortBy('attributes.position'))
    @php($secondaryTags = $tags->where('attributes.isChild', false)->where('attributes.position', '===', NULL)->sortBy('attributes.name'))

    @foreach (array($primaryTags, $secondaryTags) as $category)
        <ul>
            @foreach ($category->pluck('attributes', 'id') as $id => $tag)
                <li>
                    <a href="{{ $url->to('forum')->route('tag', [
                                'slug' => $tag['slug']
                            ]) }}">
                        {{ $tag['name'] }}
                    </a>

                    @php($children = $tags->where('attributes.isChild', true)->where('relationships.parent.data.id', $id))

                    @if (!$children->isEmpty())
                        <ul>
                            @foreach ($children->sortBy('attributes.position')->pluck('attributes') as $child)
                                <li>
                                    <a href="{{ $url->to('forum')->route('tag', [
                                                'slug' => $child['slug']
                                            ]) }}">
                                        {{ $child['name'] }}
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </li>
            @endforeach
            </ul>
    @endforeach
</div>
