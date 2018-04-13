import '../bower_components/html.sortable/dist/html.sortable.js';

import Tag from '../../lib/models/Tag';
import addTagsPermissionScope from './addTagsPermissionScope';
import addTagPermission from './addTagPermission';
import addTagsPane from './addTagsPane';
import addTagsHomePageOption from './addTagsHomePageOption';
import addTagChangePermission from './addTagChangePermission';

app.initializers.add('flarum-tags', app => {
  app.store.models.tags = Tag;

  console.log('hi')

  addTagsPermissionScope();
  addTagPermission();
  addTagsPane();
  addTagsHomePageOption();
  addTagChangePermission();
});
