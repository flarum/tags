import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import EventPost from 'flarum/forum/components/EventPost';
import tagsLabel from '../../common/helpers/tagsLabel';

export default class DiscussionTaggedPost extends EventPost {
  static initAttrs(attrs) {
    super.initAttrs(attrs);

    const oldTags = attrs.post.content()[0];
    const newTags = attrs.post.content()[1];

    function diffTags(tags1, tags2) {
      return tags1
        .filter(tag => !tags2.includes(tag));
    }

    attrs.tagsAddedIds = diffTags(newTags, oldTags);
    attrs.tagsRemovedIds = diffTags(oldTags, newTags);
  }

  oninit(vnode) {
    super.oninit(vnode);

    this.loading = true;

    const neededIds = new Set([...this.attrs.tagsAddedIds, ...this.attrs.tagsRemovedIds]);

    Promise.all(Array.from(neededIds).map((id => {
      if (app.store.getById('tags', id)) {
        return Promise.resolve();
      }

      return app.store.find('tags', id).catch(() => { });
    }))).then(() => {
      this.tagsAdded = this.attrs.tagsAddedIds.map((id) => app.store.getById('tags', id)).filter(Boolean);
      this.tagsRemoved = this.attrs.tagsRemovedIds.map((id) => app.store.getById('tags', id)).filter(Boolean);
      this.loading = false;
      m.redraw();
    })
  }

  icon() {
    return 'fas fa-tag';
  }

  descriptionKey() {
    if (this.tagsAdded.length) {
      if (this.tagsRemoved.length) {
        return 'flarum-tags.forum.post_stream.added_and_removed_tags_text';
      }

      return 'flarum-tags.forum.post_stream.added_tags_text';
    }

    return 'flarum-tags.forum.post_stream.removed_tags_text';
  }

  descriptionData() {
    const data = {};

    if (this.tagsAdded.length) {
      data.tagsAdded = app.translator.trans('flarum-tags.forum.post_stream.tags_text', {
        tags: tagsLabel(this.tagsAdded, {link: true}),
        count: this.tagsAdded.length
      });
    }

    if (this.tagsRemoved.length) {
      data.tagsRemoved = app.translator.trans('flarum-tags.forum.post_stream.tags_text', {
        tags: tagsLabel(this.tagsRemoved, {link: true}),
        count: this.tagsRemoved.length
      });
    }

    return data;
  }
}
