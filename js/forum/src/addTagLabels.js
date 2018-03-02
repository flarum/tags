import { extend } from 'flarum/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import DiscussionPage from 'flarum/components/DiscussionPage';
import DiscussionHeader from 'flarum/components/DiscussionHeader';

import tagsLabel from 'flarum/tags/helpers/tagsLabel';

export default function() {
  // Add tag labels to each discussion in the discussion list.
  extend(DiscussionListItem.prototype, 'infoItems', function(items) {
    const tags = this.props.discussion.tags();

    if (tags && tags.length) {
      items.add('tags', tagsLabel(tags), 10);
    }
  });

  // Include a discussion's tags when fetching it.
  extend(DiscussionPage.prototype, 'params', function(params) {
    params.include.push('tags');
  });

  // Add a list of a discussion's tags to the discussion hero, displayed
  // before the title. Put the title on its own line.
  extend(DiscussionHeader.prototype, 'items', function(items) {
    const tags = this.props.discussion.tags();

    if (tags && tags.length) {
      items.add('tags', tagsLabel(tags, {link: true}), 20);
    }
  });
}
