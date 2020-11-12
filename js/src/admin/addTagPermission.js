import ExtensionData from "flarum/utils/ExtensionData";

export default function() {
  new ExtensionData('flarum-tags')
    .registerData('permissions', {
      icon: 'fas fa-tag',
      label: app.translator.trans('flarum-tags.admin.permissions.tag_discussions_label'),
      permission: 'discussion.tag'
    }, 'moderate', 95);
}
