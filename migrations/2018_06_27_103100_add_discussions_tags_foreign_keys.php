<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        // Make sure the entities exist so that we will be able to create
        // foreign keys without any issues.
        $connection = $schema->getConnection();
        $prefix = $connection->getTablePrefix();
        $connection->statement("delete from {$prefix}discussions_tags
            where not exists (select 1 from {$prefix}discussions where id = discussion_id)
            or not exists (select 1 from {$prefix}tags where id = tag_id)");

        $schema->table('discussions_tags', function (Blueprint $table) {
            $table->foreign('discussion_id')->references('id')->on('discussions')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('discussions_tags', function (Blueprint $table) {
            $table->dropForeign(['discussion_id', 'tag_id']);
        });
    }
];
