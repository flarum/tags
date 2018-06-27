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
        $schema->table('tags', function (Blueprint $table) {
            $table->renameColumn('discussions_count', 'discussion_count');
            $table->renameColumn('last_time', 'last_posted_at');
            $table->renameColumn('last_discussion_id', 'last_posted_discussion_id');

            $table->integer('parent_id')->unsigned()->nullable()->change();

            $table->integer('post_count')->unsigned()->default(0);
            $table->integer('last_posted_user_id')->unsigned()->nullable();
        });

        // Populate the new post_count column, and make sure the last_posted
        // entities exist so that we will be able to create foreign keys
        // without any issues.
        $connection = $schema->getConnection();
        $prefix = $connection->getTablePrefix();
        $connection->statement("update {$prefix}tags tags set
            post_count = (select count(id) from {$prefix}posts where discussion_id in (select discussion_id from {$prefix}discussions_tags where tag_id = tags.id)),
            last_posted_user_id = (select last_posted_user_id from {$prefix}discussions where id = last_posted_discussion_id),
            last_posted_discussion_id = (select id from {$prefix}discussions where id = last_posted_discussion_id)");

        $schema->table('tags', function (Blueprint $table) {
            $table->foreign('parent_id')->references('id')->on('tags')->onDelete('set null');
            $table->foreign('last_posted_user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('last_posted_discussion_id')->references('id')->on('discussions')->onDelete('set null');
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('tags', function (Blueprint $table) {
            $table->dropForeign(['parent_id', 'last_posted_discussion_id', 'last_posted_user_id']);

            $table->dropColumn('post_count', 'last_posted_user_id');

            $table->integer('parent_id')->nullable()->change();

            $table->renameColumn('discussion_count', 'discussions_count');
            $table->renameColumn('last_posted_at', 'last_time');
            $table->renameColumn('last_posted_discussion_id', 'last_discussion_id');
        });
    }
];
