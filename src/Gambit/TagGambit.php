<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Tags\Gambit;

use Flarum\Core\Search\AbstractRegexGambit;
use Flarum\Core\Search\AbstractSearch;
use Flarum\Tags\TagRepository;
use Illuminate\Database\Query\Expression;

class TagGambit extends AbstractRegexGambit
{
    /**
     * {@inheritdoc}
     */
    protected $pattern = 'tag:(.+)';

    /**
     * @var TagRepository
     */
    protected $tags;

    /**
     * @param TagRepository $tags
     */
    public function __construct(TagRepository $tags)
    {
        $this->tags = $tags;
    }

    /**
     * {@inheritdoc}
     */
    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        $slugs = explode(',', trim($matches[1], '"'));

        $search->getQuery()->where(function ($query) use ($slugs, $negate) {
            foreach ($slugs as $slug) {
                if ($slug === 'untagged') {
                    if (!$negate) {
                        $query->orWhereNotExists(function ($query) {
                            $query->select(new Expression(1))
                                ->from('discussions_tags')
                                ->where('discussions.id', new Expression('discussion_id'));
                        });
                    } else {
                        $query->orWhereExists(function ($query) {
                            $query->select(new Expression(1))
                                ->from('discussions_tags')
                                ->where('discussions.id', new Expression('discussion_id'));
                        });
                    }
                } else {
                    $id = $this->tags->getIdForSlug($slug);
                    if (!$negate) {
                        $query->orWhereExists(function ($query) use ($id) {
                            $query->select(new Expression(1))
                                ->from('discussions_tags')
                                ->where('discussions.id', new Expression('discussion_id'))
                                ->where('tag_id', $id);
                        });
                    } else {
                        $query->orWhereNotExists(function ($query) use ($id) {
                            $query->select(new Expression(1))
                                ->from('discussions_tags')
                                ->where('discussions.id', new Expression('discussion_id'))
                                ->where('tag_id', $id);
                        });
                    }
                }
            }
        });
    }
}
