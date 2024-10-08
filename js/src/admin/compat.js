import compat from '../common/compat';

import addTagsHomePageOption from './addTagsHomePageOption';
import addTagChangePermission from './addTagChangePermission';
import TagsPage from './components/TagsPage';
import EditTagModal from './components/EditTagModal';
import SelectTagsSettingComponent from './components/SelectTagsSettingComponent';
import addTagPermission from './addTagPermission';
import addTagsPermissionScope from './addTagsPermissionScope';

export default Object.assign(compat, {
  'tags/addTagsHomePageOption': addTagsHomePageOption,
  'tags/addTagChangePermission': addTagChangePermission,
  'tags/components/TagsPage': TagsPage,
  'tags/components/EditTagModal': EditTagModal,
  'tags/components/SelectTagsSettingComponent': SelectTagsSettingComponent,
  'tags/addTagPermission': addTagPermission,
  'tags/addTagsPermissionScope': addTagsPermissionScope,
});
