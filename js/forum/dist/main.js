/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../lib/compat.js":
/*!************************!*\
  !*** ../lib/compat.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ./utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nvar _Tag = _interopRequireDefault(__webpack_require__(/*! ./models/Tag */ \"../lib/models/Tag.js\"));\n\nvar _tagsLabel = _interopRequireDefault(__webpack_require__(/*! ./helpers/tagsLabel */ \"../lib/helpers/tagsLabel.js\"));\n\nvar _tagIcon = _interopRequireDefault(__webpack_require__(/*! ./helpers/tagIcon */ \"../lib/helpers/tagIcon.js\"));\n\nvar _tagLabel = _interopRequireDefault(__webpack_require__(/*! ./helpers/tagLabel */ \"../lib/helpers/tagLabel.js\"));\n\nvar _default = {\n  'tags/utils/sortTags': _sortTags.default,\n  'tags/models/Tag': _Tag.default,\n  'tags/helpers/tagsLabel': _tagsLabel.default,\n  'tags/helpers/tagIcon': _tagIcon.default,\n  'tags/helpers/tagLabel': _tagLabel.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///../lib/compat.js?");

/***/ }),

/***/ "../lib/helpers/tagIcon.js":
/*!*********************************!*\
  !*** ../lib/helpers/tagIcon.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = tagIcon;\n\nfunction tagIcon(tag) {\n  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  attrs.className = 'icon TagIcon ' + (attrs.className || '');\n\n  if (tag) {\n    attrs.style = attrs.style || {};\n    attrs.style.backgroundColor = tag.color();\n  } else {\n    attrs.className += ' untagged';\n  }\n\n  return m(\"span\", attrs);\n}\n\n//# sourceURL=webpack:///../lib/helpers/tagIcon.js?");

/***/ }),

/***/ "../lib/helpers/tagLabel.js":
/*!**********************************!*\
  !*** ../lib/helpers/tagLabel.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = tagLabel;\n\nvar _extract = _interopRequireDefault(__webpack_require__(/*! flarum/utils/extract */ \"flarum/utils/extract\"));\n\nfunction tagLabel(tag) {\n  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  attrs.style = attrs.style || {};\n  attrs.className = 'TagLabel ' + (attrs.className || '');\n  var link = (0, _extract.default)(attrs, 'link');\n\n  if (tag) {\n    var color = tag.color();\n\n    if (color) {\n      attrs.style.backgroundColor = attrs.style.color = color;\n      attrs.className += ' colored';\n    }\n\n    if (link) {\n      attrs.title = tag.description() || '';\n      attrs.href = app.route('tag', {\n        tags: tag.slug()\n      });\n      attrs.config = m.route;\n    }\n  } else {\n    attrs.className += ' untagged';\n  }\n\n  return m(link ? 'a' : 'span', attrs, m(\"span\", {\n    className: \"TagLabel-text\"\n  }, tag ? tag.name() : app.translator.trans('flarum-tags.lib.deleted_tag_text')));\n}\n\n//# sourceURL=webpack:///../lib/helpers/tagLabel.js?");

/***/ }),

/***/ "../lib/helpers/tagsLabel.js":
/*!***********************************!*\
  !*** ../lib/helpers/tagsLabel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = tagsLabel;\n\nvar _extract = _interopRequireDefault(__webpack_require__(/*! flarum/utils/extract */ \"flarum/utils/extract\"));\n\nvar _tagLabel = _interopRequireDefault(__webpack_require__(/*! ./tagLabel */ \"../lib/helpers/tagLabel.js\"));\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ../utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nfunction tagsLabel(tags) {\n  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var children = [];\n  var link = (0, _extract.default)(attrs, 'link');\n  attrs.className = 'TagsLabel ' + (attrs.className || '');\n\n  if (tags) {\n    (0, _sortTags.default)(tags).forEach(function (tag) {\n      if (tag || tags.length === 1) {\n        children.push((0, _tagLabel.default)(tag, {\n          link: link\n        }));\n      }\n    });\n  } else {\n    children.push((0, _tagLabel.default)());\n  }\n\n  return m(\"span\", attrs, children);\n}\n\n//# sourceURL=webpack:///../lib/helpers/tagsLabel.js?");

/***/ }),

/***/ "../lib/models/Tag.js":
/*!****************************!*\
  !*** ../lib/models/Tag.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _Model = _interopRequireDefault(__webpack_require__(/*! flarum/Model */ \"flarum/Model\"));\n\nvar _mixin2 = _interopRequireDefault(__webpack_require__(/*! flarum/utils/mixin */ \"flarum/utils/mixin\"));\n\nvar _computed = _interopRequireDefault(__webpack_require__(/*! flarum/utils/computed */ \"flarum/utils/computed\"));\n\nvar Tag =\n/*#__PURE__*/\nfunction (_mixin) {\n  (0, _inherits2.default)(Tag, _mixin);\n\n  function Tag() {\n    (0, _classCallCheck2.default)(this, Tag);\n    return (0, _possibleConstructorReturn2.default)(this, (Tag.__proto__ || (0, _getPrototypeOf.default)(Tag)).apply(this, arguments));\n  }\n\n  return Tag;\n}((0, _mixin2.default)(_Model.default, {\n  name: _Model.default.attribute('name'),\n  slug: _Model.default.attribute('slug'),\n  description: _Model.default.attribute('description'),\n  color: _Model.default.attribute('color'),\n  backgroundUrl: _Model.default.attribute('backgroundUrl'),\n  backgroundMode: _Model.default.attribute('backgroundMode'),\n  position: _Model.default.attribute('position'),\n  parent: _Model.default.hasOne('parent'),\n  defaultSort: _Model.default.attribute('defaultSort'),\n  isChild: _Model.default.attribute('isChild'),\n  isHidden: _Model.default.attribute('isHidden'),\n  discussionsCount: _Model.default.attribute('discussionsCount'),\n  lastTime: _Model.default.attribute('lastTime', _Model.default.transformDate),\n  lastDiscussion: _Model.default.hasOne('lastDiscussion'),\n  isRestricted: _Model.default.attribute('isRestricted'),\n  canStartDiscussion: _Model.default.attribute('canStartDiscussion'),\n  canAddToDiscussion: _Model.default.attribute('canAddToDiscussion'),\n  isPrimary: (0, _computed.default)('position', 'parent', function (position, parent) {\n    return position !== null && parent === false;\n  })\n}));\n\nexports.default = Tag;\n\n//# sourceURL=webpack:///../lib/models/Tag.js?");

/***/ }),

/***/ "../lib/utils/sortTags.js":
/*!********************************!*\
  !*** ../lib/utils/sortTags.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = sortTags;\n\nfunction sortTags(tags) {\n  return tags.slice(0).sort(function (a, b) {\n    var aPos = a.position();\n    var bPos = b.position(); // If they're both secondary tags, sort them by their discussions count,\n    // descending.\n\n    if (aPos === null && bPos === null) return b.discussionsCount() - a.discussionsCount(); // If just one is a secondary tag, then the primary tag should\n    // come first.\n\n    if (bPos === null) return -1;\n    if (aPos === null) return 1; // If we've made it this far, we know they're both primary tags. So we'll\n    // need to see if they have parents.\n\n    var aParent = a.parent();\n    var bParent = b.parent(); // If they both have the same parent, then their positions are local,\n    // so we can compare them directly.\n\n    if (aParent === bParent) return aPos - bPos; // If they are both child tags, then we will compare the positions of their\n    // parents.\n    else if (aParent && bParent) return aParent.position() - bParent.position(); // If we are comparing a child tag with its parent, then we let the parent\n      // come first. If we are comparing an unrelated parent/child, then we\n      // compare both of the parents.\n      else if (aParent) return aParent === b ? 1 : aParent.position() - bPos;else if (bParent) return bParent === a ? -1 : aPos - bParent.position();\n    return 0;\n  });\n}\n\n//# sourceURL=webpack:///../lib/utils/sortTags.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/assign.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ \"./node_modules/core-js/library/fn/object/assign.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ \"./node_modules/core-js/library/fn/object/get-own-property-descriptor.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"./node_modules/core-js/library/fn/object/get-prototype-of.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/symbol.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/symbol.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/symbol/iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/symbol/iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime/core-js/object/define-property.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _Object$defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\");\n\nvar _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js\");\n\nfunction _get(object, property, receiver) {\n  if (object === null) object = Function.prototype;\n\n  var desc = _Object$getOwnPropertyDescriptor(object, property);\n\n  if (desc === undefined) {\n    var parent = _Object$getPrototypeOf(object);\n\n    if (parent === null) {\n      return undefined;\n    } else {\n      return _get(parent, property, receiver);\n    }\n  } else if (\"value\" in desc) {\n    return desc.value;\n  } else {\n    var getter = desc.get;\n\n    if (getter === undefined) {\n      return undefined;\n    }\n\n    return getter.call(receiver);\n  }\n}\n\nmodule.exports = _get;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/get.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/set-prototype-of.js\");\n\nvar _Object$create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/@babel/runtime/core-js/object/create.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = _Object$create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/@babel/runtime/core-js/symbol/iterator.js\");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime/core-js/symbol.js\");\n\nfunction _typeof2(obj) { if (typeof _Symbol === \"function\" && typeof _Symbol$iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof _Symbol === \"function\" && _typeof2(_Symbol$iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"./node_modules/core-js/library/modules/es6.object.assign.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function getOwnPropertyDescriptor(it, key) {\n  return $Object.getOwnPropertyDescriptor(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.3' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && key in exports) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = (!BUGGY && $native) || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/library/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./src/addTagComposer.js":
/*!*******************************!*\
  !*** ./src/addTagComposer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _IndexPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/IndexPage */ \"flarum/components/IndexPage\"));\n\nvar _DiscussionComposer = _interopRequireDefault(__webpack_require__(/*! flarum/components/DiscussionComposer */ \"flarum/components/DiscussionComposer\"));\n\nvar _TagDiscussionModal = _interopRequireDefault(__webpack_require__(/*! ./components/TagDiscussionModal */ \"./src/components/TagDiscussionModal.js\"));\n\nvar _tagsLabel = _interopRequireDefault(__webpack_require__(/*! ../../lib/helpers/tagsLabel */ \"../lib/helpers/tagsLabel.js\"));\n\nfunction _default() {\n  (0, _extend.extend)(_IndexPage.default.prototype, 'composeNewDiscussion', function (promise) {\n    var tag = app.store.getBy('tags', 'slug', this.params().tags);\n\n    if (tag) {\n      var parent = tag.parent();\n      var tags = parent ? [parent, tag] : [tag];\n      promise.then(function (component) {\n        return component.tags = tags;\n      });\n    }\n  }); // Add tag-selection abilities to the discussion composer.\n\n  _DiscussionComposer.default.prototype.tags = [];\n\n  _DiscussionComposer.default.prototype.chooseTags = function () {\n    var _this = this;\n\n    app.modal.show(new _TagDiscussionModal.default({\n      selectedTags: this.tags.slice(0),\n      onsubmit: function onsubmit(tags) {\n        _this.tags = tags;\n\n        _this.$('textarea').focus();\n      }\n    }));\n  }; // Add a tag-selection menu to the discussion composer's header, after the\n  // title.\n\n\n  (0, _extend.extend)(_DiscussionComposer.default.prototype, 'headerItems', function (items) {\n    items.add('tags', m(\"a\", {\n      className: \"DiscussionComposer-changeTags\",\n      onclick: this.chooseTags.bind(this)\n    }, this.tags.length ? (0, _tagsLabel.default)(this.tags) : m(\"span\", {\n      className: \"TagLabel untagged\"\n    }, app.translator.trans('flarum-tags.forum.composer_discussion.choose_tags_link'))), 10);\n  });\n  (0, _extend.override)(_DiscussionComposer.default.prototype, 'onsubmit', function (original) {\n    var _this2 = this;\n\n    var chosenTags = this.tags;\n    var chosenPrimaryTags = chosenTags.filter(function (tag) {\n      return tag.position() !== null && !tag.isChild();\n    });\n    var chosenSecondaryTags = chosenTags.filter(function (tag) {\n      return tag.position() === null;\n    });\n\n    if (!chosenTags.length || chosenPrimaryTags.length < app.forum.attribute('minPrimaryTags') || chosenSecondaryTags.length < app.forum.attribute('minSecondaryTags')) {\n      app.modal.show(new _TagDiscussionModal.default({\n        selectedTags: chosenTags,\n        onsubmit: function onsubmit(tags) {\n          _this2.tags = tags;\n          original();\n        }\n      }));\n    } else {\n      original();\n    }\n  }); // Add the selected tags as data to submit to the server.\n\n  (0, _extend.extend)(_DiscussionComposer.default.prototype, 'data', function (data) {\n    data.relationships = data.relationships || {};\n    data.relationships.tags = this.tags;\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagComposer.js?");

/***/ }),

/***/ "./src/addTagControl.js":
/*!******************************!*\
  !*** ./src/addTagControl.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _DiscussionControls = _interopRequireDefault(__webpack_require__(/*! flarum/utils/DiscussionControls */ \"flarum/utils/DiscussionControls\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! flarum/components/Button */ \"flarum/components/Button\"));\n\nvar _TagDiscussionModal = _interopRequireDefault(__webpack_require__(/*! ./components/TagDiscussionModal */ \"./src/components/TagDiscussionModal.js\"));\n\nfunction _default() {\n  // Add a control allowing the discussion to be moved to another category.\n  (0, _extend.extend)(_DiscussionControls.default, 'moderationControls', function (items, discussion) {\n    if (discussion.canTag()) {\n      items.add('tags', _Button.default.component({\n        children: app.translator.trans('flarum-tags.forum.discussion_controls.edit_tags_button'),\n        icon: 'fa fa-tag',\n        onclick: function onclick() {\n          return app.modal.show(new _TagDiscussionModal.default({\n            discussion: discussion\n          }));\n        }\n      }));\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagControl.js?");

/***/ }),

/***/ "./src/addTagFilter.js":
/*!*****************************!*\
  !*** ./src/addTagFilter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _IndexPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/IndexPage */ \"flarum/components/IndexPage\"));\n\nvar _DiscussionList = _interopRequireDefault(__webpack_require__(/*! flarum/components/DiscussionList */ \"flarum/components/DiscussionList\"));\n\nvar _TagHero = _interopRequireDefault(__webpack_require__(/*! ./components/TagHero */ \"./src/components/TagHero.js\"));\n\nfunction _default() {\n  _IndexPage.default.prototype.currentTag = function () {\n    var slug = this.params().tags;\n    if (slug) return app.store.getBy('tags', 'slug', slug);\n  }; // If currently viewing a tag, insert a tag hero at the top of the view.\n\n\n  (0, _extend.override)(_IndexPage.default.prototype, 'hero', function (original) {\n    var tag = this.currentTag();\n    if (tag) return _TagHero.default.component({\n      tag: tag\n    });\n    return original();\n  });\n  (0, _extend.extend)(_IndexPage.default.prototype, 'view', function (vdom) {\n    var tag = this.currentTag();\n\n    if (tag) {\n      vdom.attrs.className += ' IndexPage--tag' + tag.id();\n    }\n  }); // If currently viewing a tag, restyle the 'new discussion' button to use\n  // the tag's color.\n\n  (0, _extend.extend)(_IndexPage.default.prototype, 'sidebarItems', function (items) {\n    var tag = this.currentTag();\n\n    if (tag) {\n      var color = tag.color();\n\n      if (color) {\n        items.get('newDiscussion').props.style = {\n          backgroundColor: color\n        };\n      }\n    }\n  }); // Add a parameter for the IndexPage to pass on to the DiscussionList that\n  // will let us filter discussions by tag.\n\n  (0, _extend.extend)(_IndexPage.default.prototype, 'params', function (params) {\n    params.tags = m.route.param('tags');\n  }); // Translate that parameter into a gambit appended to the search query.\n\n  (0, _extend.extend)(_DiscussionList.default.prototype, 'requestParams', function (params) {\n    params.include.push('tags');\n\n    if (this.props.params.tags) {\n      params.filter.q = (params.filter.q || '') + ' tag:' + this.props.params.tags;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagFilter.js?");

/***/ }),

/***/ "./src/addTagLabels.js":
/*!*****************************!*\
  !*** ./src/addTagLabels.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _DiscussionListItem = _interopRequireDefault(__webpack_require__(/*! flarum/components/DiscussionListItem */ \"flarum/components/DiscussionListItem\"));\n\nvar _DiscussionPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/DiscussionPage */ \"flarum/components/DiscussionPage\"));\n\nvar _DiscussionHero = _interopRequireDefault(__webpack_require__(/*! flarum/components/DiscussionHero */ \"flarum/components/DiscussionHero\"));\n\nvar _tagsLabel = _interopRequireDefault(__webpack_require__(/*! ../../lib/helpers/tagsLabel */ \"../lib/helpers/tagsLabel.js\"));\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ../../lib/utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nfunction _default() {\n  // Add tag labels to each discussion in the discussion list.\n  (0, _extend.extend)(_DiscussionListItem.default.prototype, 'infoItems', function (items) {\n    var tags = this.props.discussion.tags();\n\n    if (tags && tags.length) {\n      items.add('tags', (0, _tagsLabel.default)(tags), 10);\n    }\n  }); // Include a discussion's tags when fetching it.\n\n  (0, _extend.extend)(_DiscussionPage.default.prototype, 'params', function (params) {\n    params.include.push('tags');\n  }); // Restyle a discussion's hero to use its first tag's color.\n\n  (0, _extend.extend)(_DiscussionHero.default.prototype, 'view', function (view) {\n    var tags = (0, _sortTags.default)(this.props.discussion.tags());\n\n    if (tags && tags.length) {\n      var color = tags[0].color();\n\n      if (color) {\n        view.attrs.style = {\n          backgroundColor: color\n        };\n        view.attrs.className += ' DiscussionHero--colored';\n      }\n    }\n  }); // Add a list of a discussion's tags to the discussion hero, displayed\n  // before the title. Put the title on its own line.\n\n  (0, _extend.extend)(_DiscussionHero.default.prototype, 'items', function (items) {\n    var tags = this.props.discussion.tags();\n\n    if (tags && tags.length) {\n      items.add('tags', (0, _tagsLabel.default)(tags, {\n        link: true\n      }), 5);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagLabels.js?");

/***/ }),

/***/ "./src/addTagList.js":
/*!***************************!*\
  !*** ./src/addTagList.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _IndexPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/IndexPage */ \"flarum/components/IndexPage\"));\n\nvar _Separator = _interopRequireDefault(__webpack_require__(/*! flarum/components/Separator */ \"flarum/components/Separator\"));\n\nvar _LinkButton = _interopRequireDefault(__webpack_require__(/*! flarum/components/LinkButton */ \"flarum/components/LinkButton\"));\n\nvar _TagLinkButton = _interopRequireDefault(__webpack_require__(/*! ./components/TagLinkButton */ \"./src/components/TagLinkButton.js\"));\n\nvar _TagsPage = _interopRequireDefault(__webpack_require__(/*! ./components/TagsPage */ \"./src/components/TagsPage.js\"));\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ../../lib/utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nfunction _default() {\n  // Add a link to the tags page, as well as a list of all the tags,\n  // to the index page's sidebar.\n  (0, _extend.extend)(_IndexPage.default.prototype, 'navItems', function (items) {\n    items.add('tags', _LinkButton.default.component({\n      icon: 'fa fa-th-large',\n      children: app.translator.trans('flarum-tags.forum.index.tags_link'),\n      href: app.route('tags')\n    }), -10);\n    if (app.current instanceof _TagsPage.default) return;\n    items.add('separator', _Separator.default.component(), -10);\n    var params = this.stickyParams();\n    var tags = app.store.all('tags');\n    var currentTag = this.currentTag();\n\n    var addTag = function addTag(tag) {\n      var active = currentTag === tag;\n\n      if (!active && currentTag) {\n        active = currentTag.parent() === tag;\n      }\n\n      items.add('tag' + tag.id(), _TagLinkButton.default.component({\n        tag: tag,\n        params: params,\n        active: active\n      }), -10);\n    };\n\n    (0, _sortTags.default)(tags).filter(function (tag) {\n      return tag.position() !== null && (!tag.isChild() || currentTag && (tag.parent() === currentTag || tag.parent() === currentTag.parent()));\n    }).forEach(addTag);\n    var more = tags.filter(function (tag) {\n      return tag.position() === null;\n    }).sort(function (a, b) {\n      return b.discussionsCount() - a.discussionsCount();\n    });\n    more.splice(0, 3).forEach(addTag);\n\n    if (more.length) {\n      items.add('moreTags', _LinkButton.default.component({\n        children: app.translator.trans('flarum-tags.forum.index.more_link'),\n        href: app.route('tags')\n      }), -10);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagList.js?");

/***/ }),

/***/ "./src/compat.js":
/*!***********************!*\
  !*** ./src/compat.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/assign */ \"./node_modules/@babel/runtime/core-js/object/assign.js\"));\n\nvar _compat = _interopRequireDefault(__webpack_require__(/*! ../../lib/compat */ \"../lib/compat.js\"));\n\nvar _addTagFilter = _interopRequireDefault(__webpack_require__(/*! ./addTagFilter */ \"./src/addTagFilter.js\"));\n\nvar _addTagControl = _interopRequireDefault(__webpack_require__(/*! ./addTagControl */ \"./src/addTagControl.js\"));\n\nvar _TagHero = _interopRequireDefault(__webpack_require__(/*! ./components/TagHero */ \"./src/components/TagHero.js\"));\n\nvar _TagDiscussionModal = _interopRequireDefault(__webpack_require__(/*! ./components/TagDiscussionModal */ \"./src/components/TagDiscussionModal.js\"));\n\nvar _TagsPage = _interopRequireDefault(__webpack_require__(/*! ./components/TagsPage */ \"./src/components/TagsPage.js\"));\n\nvar _DiscussionTaggedPost = _interopRequireDefault(__webpack_require__(/*! ./components/DiscussionTaggedPost */ \"./src/components/DiscussionTaggedPost.js\"));\n\nvar _TagLinkButton = _interopRequireDefault(__webpack_require__(/*! ./components/TagLinkButton */ \"./src/components/TagLinkButton.js\"));\n\nvar _addTagList = _interopRequireDefault(__webpack_require__(/*! ./addTagList */ \"./src/addTagList.js\"));\n\nvar _addTagLabels = _interopRequireDefault(__webpack_require__(/*! ./addTagLabels */ \"./src/addTagLabels.js\"));\n\nvar _addTagComposer = _interopRequireDefault(__webpack_require__(/*! ./addTagComposer */ \"./src/addTagComposer.js\"));\n\nvar _default = (0, _assign.default)(_compat.default, {\n  'addTagFilter': _addTagFilter.default,\n  'addTagControl': _addTagControl.default,\n  'components/TagHero': _TagHero.default,\n  'components/TagDiscussionModal': _TagDiscussionModal.default,\n  'components/TagsPage': _TagsPage.default,\n  'components/DiscussionTaggedPost': _DiscussionTaggedPost.default,\n  'components/TagLinkButton': _TagLinkButton.default,\n  'addTagList': _addTagList.default,\n  'addTagLabels': _addTagLabels.default,\n  'addTagComposer': _addTagComposer.default\n});\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/compat.js?");

/***/ }),

/***/ "./src/components/DiscussionTaggedPost.js":
/*!************************************************!*\
  !*** ./src/components/DiscussionTaggedPost.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/get.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _EventPost2 = _interopRequireDefault(__webpack_require__(/*! flarum/components/EventPost */ \"flarum/components/EventPost\"));\n\nvar _tagsLabel = _interopRequireDefault(__webpack_require__(/*! ../../../lib/helpers/tagsLabel */ \"../lib/helpers/tagsLabel.js\"));\n\nvar DiscussionTaggedPost =\n/*#__PURE__*/\nfunction (_EventPost) {\n  (0, _inherits2.default)(DiscussionTaggedPost, _EventPost);\n\n  function DiscussionTaggedPost() {\n    (0, _classCallCheck2.default)(this, DiscussionTaggedPost);\n    return (0, _possibleConstructorReturn2.default)(this, (DiscussionTaggedPost.__proto__ || (0, _getPrototypeOf.default)(DiscussionTaggedPost)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(DiscussionTaggedPost, [{\n    key: \"icon\",\n    value: function icon() {\n      return 'fa fa-tag';\n    }\n  }, {\n    key: \"descriptionKey\",\n    value: function descriptionKey() {\n      if (this.props.tagsAdded.length) {\n        if (this.props.tagsRemoved.length) {\n          return 'flarum-tags.forum.post_stream.added_and_removed_tags_text';\n        }\n\n        return 'flarum-tags.forum.post_stream.added_tags_text';\n      }\n\n      return 'flarum-tags.forum.post_stream.removed_tags_text';\n    }\n  }, {\n    key: \"descriptionData\",\n    value: function descriptionData() {\n      var data = {};\n\n      if (this.props.tagsAdded.length) {\n        data.tagsAdded = app.translator.transChoice('flarum-tags.forum.post_stream.tags_text', this.props.tagsAdded.length, {\n          tags: (0, _tagsLabel.default)(this.props.tagsAdded, {\n            link: true\n          }),\n          count: this.props.tagsAdded.length\n        });\n      }\n\n      if (this.props.tagsRemoved.length) {\n        data.tagsRemoved = app.translator.transChoice('flarum-tags.forum.post_stream.tags_text', this.props.tagsRemoved.length, {\n          tags: (0, _tagsLabel.default)(this.props.tagsRemoved, {\n            link: true\n          }),\n          count: this.props.tagsRemoved.length\n        });\n      }\n\n      return data;\n    }\n  }], [{\n    key: \"initProps\",\n    value: function initProps(props) {\n      (0, _get2.default)(DiscussionTaggedPost.__proto__ || (0, _getPrototypeOf.default)(DiscussionTaggedPost), \"initProps\", this).call(this, props);\n      var oldTags = props.post.content()[0];\n      var newTags = props.post.content()[1];\n\n      function diffTags(tags1, tags2) {\n        return tags1.filter(function (tag) {\n          return tags2.indexOf(tag) === -1;\n        }).map(function (id) {\n          return app.store.getById('tags', id);\n        });\n      }\n\n      props.tagsAdded = diffTags(newTags, oldTags);\n      props.tagsRemoved = diffTags(oldTags, newTags);\n    }\n  }]);\n  return DiscussionTaggedPost;\n}(_EventPost2.default);\n\nexports.default = DiscussionTaggedPost;\n\n//# sourceURL=webpack:///./src/components/DiscussionTaggedPost.js?");

/***/ }),

/***/ "./src/components/TagDiscussionModal.js":
/*!**********************************************!*\
  !*** ./src/components/TagDiscussionModal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/get.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _Modal2 = _interopRequireDefault(__webpack_require__(/*! flarum/components/Modal */ \"flarum/components/Modal\"));\n\nvar _DiscussionPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/DiscussionPage */ \"flarum/components/DiscussionPage\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! flarum/components/Button */ \"flarum/components/Button\"));\n\nvar _highlight = _interopRequireDefault(__webpack_require__(/*! flarum/helpers/highlight */ \"flarum/helpers/highlight\"));\n\nvar _classList = _interopRequireDefault(__webpack_require__(/*! flarum/utils/classList */ \"flarum/utils/classList\"));\n\nvar _extractText = _interopRequireDefault(__webpack_require__(/*! flarum/utils/extractText */ \"flarum/utils/extractText\"));\n\nvar _KeyboardNavigatable = _interopRequireDefault(__webpack_require__(/*! flarum/utils/KeyboardNavigatable */ \"flarum/utils/KeyboardNavigatable\"));\n\nvar _tagLabel = _interopRequireDefault(__webpack_require__(/*! ../../../lib/helpers/tagLabel */ \"../lib/helpers/tagLabel.js\"));\n\nvar _tagIcon = _interopRequireDefault(__webpack_require__(/*! ../../../lib/helpers/tagIcon */ \"../lib/helpers/tagIcon.js\"));\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ../../../lib/utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nvar TagDiscussionModal =\n/*#__PURE__*/\nfunction (_Modal) {\n  (0, _inherits2.default)(TagDiscussionModal, _Modal);\n\n  function TagDiscussionModal() {\n    (0, _classCallCheck2.default)(this, TagDiscussionModal);\n    return (0, _possibleConstructorReturn2.default)(this, (TagDiscussionModal.__proto__ || (0, _getPrototypeOf.default)(TagDiscussionModal)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(TagDiscussionModal, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      (0, _get2.default)(TagDiscussionModal.prototype.__proto__ || (0, _getPrototypeOf.default)(TagDiscussionModal.prototype), \"init\", this).call(this);\n      this.tags = app.store.all('tags');\n\n      if (this.props.discussion) {\n        this.tags = this.tags.filter(function (tag) {\n          return tag.canAddToDiscussion() || _this.props.discussion.tags().indexOf(tag) !== -1;\n        });\n      } else {\n        this.tags = this.tags.filter(function (tag) {\n          return tag.canStartDiscussion();\n        });\n      }\n\n      this.tags = (0, _sortTags.default)(this.tags);\n      this.selected = [];\n      this.filter = m.prop('');\n      this.index = this.tags[0].id();\n      this.focused = false;\n\n      if (this.props.selectedTags) {\n        this.props.selectedTags.map(this.addTag.bind(this));\n      } else if (this.props.discussion) {\n        this.props.discussion.tags().map(this.addTag.bind(this));\n      }\n\n      this.minPrimary = app.forum.attribute('minPrimaryTags');\n      this.maxPrimary = app.forum.attribute('maxPrimaryTags');\n      this.minSecondary = app.forum.attribute('minSecondaryTags');\n      this.maxSecondary = app.forum.attribute('maxSecondaryTags');\n      this.navigator = new _KeyboardNavigatable.default();\n      this.navigator.onUp(function () {\n        return _this.setIndex(_this.getCurrentNumericIndex() - 1, true);\n      }).onDown(function () {\n        return _this.setIndex(_this.getCurrentNumericIndex() + 1, true);\n      }).onSelect(this.select.bind(this)).onRemove(function () {\n        return _this.selected.splice(_this.selected.length - 1, 1);\n      });\n    }\n  }, {\n    key: \"primaryCount\",\n    value: function primaryCount() {\n      return this.selected.filter(function (tag) {\n        return tag.isPrimary();\n      }).length;\n    }\n  }, {\n    key: \"secondaryCount\",\n    value: function secondaryCount() {\n      return this.selected.filter(function (tag) {\n        return !tag.isPrimary();\n      }).length;\n    }\n    /**\n     * Add the given tag to the list of selected tags.\n     *\n     * @param {Tag} tag\n     */\n\n  }, {\n    key: \"addTag\",\n    value: function addTag(tag) {\n      if (!tag.canStartDiscussion()) return; // If this tag has a parent, we'll also need to add the parent tag to the\n      // selected list if it's not already in there.\n\n      var parent = tag.parent();\n\n      if (parent) {\n        var index = this.selected.indexOf(parent);\n\n        if (index === -1) {\n          this.selected.push(parent);\n        }\n      }\n\n      this.selected.push(tag);\n    }\n    /**\n     * Remove the given tag from the list of selected tags.\n     *\n     * @param {Tag} tag\n     */\n\n  }, {\n    key: \"removeTag\",\n    value: function removeTag(tag) {\n      var index = this.selected.indexOf(tag);\n\n      if (index !== -1) {\n        this.selected.splice(index, 1); // Look through the list of selected tags for any tags which have the tag\n        // we just removed as their parent. We'll need to remove them too.\n\n        this.selected.filter(function (selected) {\n          return selected.parent() === tag;\n        }).forEach(this.removeTag.bind(this));\n      }\n    }\n  }, {\n    key: \"className\",\n    value: function className() {\n      return 'TagDiscussionModal';\n    }\n  }, {\n    key: \"title\",\n    value: function title() {\n      return this.props.discussion ? app.translator.trans('flarum-tags.forum.choose_tags.edit_title', {\n        title: m(\"em\", null, this.props.discussion.title())\n      }) : app.translator.trans('flarum-tags.forum.choose_tags.title');\n    }\n  }, {\n    key: \"getInstruction\",\n    value: function getInstruction(primaryCount, secondaryCount) {\n      if (primaryCount < this.minPrimary) {\n        var remaining = this.minPrimary - primaryCount;\n        return app.translator.transChoice('flarum-tags.forum.choose_tags.choose_primary_placeholder', remaining, {\n          count: remaining\n        });\n      } else if (secondaryCount < this.minSecondary) {\n        var _remaining = this.minSecondary - secondaryCount;\n\n        return app.translator.transChoice('flarum-tags.forum.choose_tags.choose_secondary_placeholder', _remaining, {\n          count: _remaining\n        });\n      }\n\n      return '';\n    }\n  }, {\n    key: \"content\",\n    value: function content() {\n      var _this2 = this;\n\n      var tags = this.tags;\n      var filter = this.filter().toLowerCase();\n      var primaryCount = this.primaryCount();\n      var secondaryCount = this.secondaryCount(); // Filter out all child tags whose parents have not been selected. This\n      // makes it impossible to select a child if its parent hasn't been selected.\n\n      tags = tags.filter(function (tag) {\n        var parent = tag.parent();\n        return parent === false || _this2.selected.indexOf(parent) !== -1;\n      }); // If the number of selected primary/secondary tags is at the maximum, then\n      // we'll filter out all other tags of that type.\n\n      if (primaryCount >= this.maxPrimary) {\n        tags = tags.filter(function (tag) {\n          return !tag.isPrimary() || _this2.selected.indexOf(tag) !== -1;\n        });\n      }\n\n      if (secondaryCount >= this.maxSecondary) {\n        tags = tags.filter(function (tag) {\n          return tag.isPrimary() || _this2.selected.indexOf(tag) !== -1;\n        });\n      } // If the user has entered text in the filter input, then filter by tags\n      // whose name matches what they've entered.\n\n\n      if (filter) {\n        tags = tags.filter(function (tag) {\n          return tag.name().substr(0, filter.length).toLowerCase() === filter;\n        });\n      }\n\n      if (tags.indexOf(this.index) === -1) this.index = tags[0];\n      return [m(\"div\", {\n        className: \"Modal-body\"\n      }, m(\"div\", {\n        className: \"TagDiscussionModal-form\"\n      }, m(\"div\", {\n        className: \"TagDiscussionModal-form-input\"\n      }, m(\"div\", {\n        className: 'TagsInput FormControl ' + (this.focused ? 'focus' : '')\n      }, m(\"span\", {\n        className: \"TagsInput-selected\"\n      }, this.selected.map(function (tag) {\n        return m(\"span\", {\n          className: \"TagsInput-tag\",\n          onclick: function onclick() {\n            _this2.removeTag(tag);\n\n            _this2.onready();\n          }\n        }, (0, _tagLabel.default)(tag));\n      })), m(\"input\", {\n        className: \"FormControl\",\n        placeholder: (0, _extractText.default)(this.getInstruction(primaryCount, secondaryCount)),\n        value: this.filter(),\n        oninput: m.withAttr('value', this.filter),\n        onkeydown: this.navigator.navigate.bind(this.navigator),\n        onfocus: function onfocus() {\n          return _this2.focused = true;\n        },\n        onblur: function onblur() {\n          return _this2.focused = false;\n        }\n      }))), m(\"div\", {\n        className: \"TagDiscussionModal-form-submit App-primaryControl\"\n      }, _Button.default.component({\n        type: 'submit',\n        className: 'Button Button--primary',\n        disabled: primaryCount < this.minPrimary || secondaryCount < this.minSecondary,\n        icon: 'fa fa-check',\n        children: app.translator.trans('flarum-tags.forum.choose_tags.submit_button')\n      })))), m(\"div\", {\n        className: \"Modal-footer\"\n      }, m(\"ul\", {\n        className: \"TagDiscussionModal-list SelectTagList\"\n      }, tags.filter(function (tag) {\n        return filter || !tag.parent() || _this2.selected.indexOf(tag.parent()) !== -1;\n      }).map(function (tag) {\n        return m(\"li\", {\n          \"data-index\": tag.id(),\n          className: (0, _classList.default)({\n            pinned: tag.position() !== null,\n            child: !!tag.parent(),\n            colored: !!tag.color(),\n            selected: _this2.selected.indexOf(tag) !== -1,\n            active: _this2.index === tag\n          }),\n          style: {\n            color: tag.color()\n          },\n          onmouseover: function onmouseover() {\n            return _this2.index = tag;\n          },\n          onclick: _this2.toggleTag.bind(_this2, tag)\n        }, (0, _tagIcon.default)(tag), m(\"span\", {\n          className: \"SelectTagListItem-name\"\n        }, (0, _highlight.default)(tag.name(), filter)), tag.description() ? m(\"span\", {\n          className: \"SelectTagListItem-description\"\n        }, tag.description()) : '');\n      })))];\n    }\n  }, {\n    key: \"toggleTag\",\n    value: function toggleTag(tag) {\n      var index = this.selected.indexOf(tag);\n\n      if (index !== -1) {\n        this.removeTag(tag);\n      } else {\n        this.addTag(tag);\n      }\n\n      if (this.filter()) {\n        this.filter('');\n        this.index = this.tags[0];\n      }\n\n      this.onready();\n    }\n  }, {\n    key: \"select\",\n    value: function select(e) {\n      // Ctrl + Enter submits the selection, just Enter completes the current entry\n      if (e.metaKey || e.ctrlKey || this.selected.indexOf(this.index) !== -1) {\n        if (this.selected.length) {\n          this.$('form').submit();\n        }\n      } else {\n        this.getItem(this.index)[0].dispatchEvent(new Event('click'));\n      }\n    }\n  }, {\n    key: \"selectableItems\",\n    value: function selectableItems() {\n      return this.$('.TagDiscussionModal-list > li');\n    }\n  }, {\n    key: \"getCurrentNumericIndex\",\n    value: function getCurrentNumericIndex() {\n      return this.selectableItems().index(this.getItem(this.index));\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(index) {\n      return this.selectableItems().filter(\"[data-index=\\\"\".concat(index.id(), \"\\\"]\"));\n    }\n  }, {\n    key: \"setIndex\",\n    value: function setIndex(index, scrollToItem) {\n      var $items = this.selectableItems();\n      var $dropdown = $items.parent();\n\n      if (index < 0) {\n        index = $items.length - 1;\n      } else if (index >= $items.length) {\n        index = 0;\n      }\n\n      var $item = $items.eq(index);\n      this.index = app.store.getById('tags', $item.attr('data-index'));\n      m.redraw();\n\n      if (scrollToItem) {\n        var dropdownScroll = $dropdown.scrollTop();\n        var dropdownTop = $dropdown.offset().top;\n        var dropdownBottom = dropdownTop + $dropdown.outerHeight();\n        var itemTop = $item.offset().top;\n        var itemBottom = itemTop + $item.outerHeight();\n        var scrollTop;\n\n        if (itemTop < dropdownTop) {\n          scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);\n        } else if (itemBottom > dropdownBottom) {\n          scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);\n        }\n\n        if (typeof scrollTop !== 'undefined') {\n          $dropdown.stop(true).animate({\n            scrollTop: scrollTop\n          }, 100);\n        }\n      }\n    }\n  }, {\n    key: \"onsubmit\",\n    value: function onsubmit(e) {\n      e.preventDefault();\n      var discussion = this.props.discussion;\n      var tags = this.selected;\n\n      if (discussion) {\n        discussion.save({\n          relationships: {\n            tags: tags\n          }\n        }).then(function () {\n          if (app.current instanceof _DiscussionPage.default) {\n            app.current.stream.update();\n          }\n\n          m.redraw();\n        });\n      }\n\n      if (this.props.onsubmit) this.props.onsubmit(tags);\n      app.modal.close();\n      m.redraw.strategy('none');\n    }\n  }]);\n  return TagDiscussionModal;\n}(_Modal2.default);\n\nexports.default = TagDiscussionModal;\n\n//# sourceURL=webpack:///./src/components/TagDiscussionModal.js?");

/***/ }),

/***/ "./src/components/TagHero.js":
/*!***********************************!*\
  !*** ./src/components/TagHero.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _Component2 = _interopRequireDefault(__webpack_require__(/*! flarum/Component */ \"flarum/Component\"));\n\nvar TagHero =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2.default)(TagHero, _Component);\n\n  function TagHero() {\n    (0, _classCallCheck2.default)(this, TagHero);\n    return (0, _possibleConstructorReturn2.default)(this, (TagHero.__proto__ || (0, _getPrototypeOf.default)(TagHero)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(TagHero, [{\n    key: \"view\",\n    value: function view() {\n      var tag = this.props.tag;\n      var color = tag.color();\n      return m(\"header\", {\n        className: 'Hero TagHero' + (color ? ' TagHero--colored' : ''),\n        style: color ? {\n          color: '#fff',\n          backgroundColor: color\n        } : ''\n      }, m(\"div\", {\n        className: \"container\"\n      }, m(\"div\", {\n        className: \"containerNarrow\"\n      }, m(\"h2\", {\n        className: \"Hero-title\"\n      }, tag.name()), m(\"div\", {\n        className: \"Hero-subtitle\"\n      }, tag.description()))));\n    }\n  }]);\n  return TagHero;\n}(_Component2.default);\n\nexports.default = TagHero;\n\n//# sourceURL=webpack:///./src/components/TagHero.js?");

/***/ }),

/***/ "./src/components/TagLinkButton.js":
/*!*****************************************!*\
  !*** ./src/components/TagLinkButton.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _LinkButton2 = _interopRequireDefault(__webpack_require__(/*! flarum/components/LinkButton */ \"flarum/components/LinkButton\"));\n\nvar _tagIcon = _interopRequireDefault(__webpack_require__(/*! ../../../lib/helpers/tagIcon */ \"../lib/helpers/tagIcon.js\"));\n\nvar TagLinkButton =\n/*#__PURE__*/\nfunction (_LinkButton) {\n  (0, _inherits2.default)(TagLinkButton, _LinkButton);\n\n  function TagLinkButton() {\n    (0, _classCallCheck2.default)(this, TagLinkButton);\n    return (0, _possibleConstructorReturn2.default)(this, (TagLinkButton.__proto__ || (0, _getPrototypeOf.default)(TagLinkButton)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(TagLinkButton, [{\n    key: \"view\",\n    value: function view() {\n      var tag = this.props.tag;\n      var active = this.constructor.isActive(this.props);\n      var description = tag && tag.description();\n      return m(\"a\", {\n        className: 'TagLinkButton hasIcon ' + (tag.isChild() ? 'child' : ''),\n        href: this.props.href,\n        config: m.route,\n        style: active && tag ? {\n          color: tag.color()\n        } : '',\n        title: description || ''\n      }, (0, _tagIcon.default)(tag, {\n        className: 'Button-icon'\n      }), this.props.children);\n    }\n  }], [{\n    key: \"initProps\",\n    value: function initProps(props) {\n      var tag = props.tag;\n      props.params.tags = tag ? tag.slug() : 'untagged';\n      props.href = app.route('tag', props.params);\n      props.children = tag ? tag.name() : app.translator.trans('flarum-tags.forum.index.untagged_link');\n    }\n  }]);\n  return TagLinkButton;\n}(_LinkButton2.default);\n\nexports.default = TagLinkButton;\n\n//# sourceURL=webpack:///./src/components/TagLinkButton.js?");

/***/ }),

/***/ "./src/components/TagsPage.js":
/*!************************************!*\
  !*** ./src/components/TagsPage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _Component2 = _interopRequireDefault(__webpack_require__(/*! flarum/Component */ \"flarum/Component\"));\n\nvar _IndexPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/IndexPage */ \"flarum/components/IndexPage\"));\n\nvar _listItems = _interopRequireDefault(__webpack_require__(/*! flarum/helpers/listItems */ \"flarum/helpers/listItems\"));\n\nvar _humanTime = _interopRequireDefault(__webpack_require__(/*! flarum/helpers/humanTime */ \"flarum/helpers/humanTime\"));\n\nvar _icon = _interopRequireDefault(__webpack_require__(/*! flarum/helpers/icon */ \"flarum/helpers/icon\"));\n\nvar _tagLabel = _interopRequireDefault(__webpack_require__(/*! ../../../lib/helpers/tagLabel */ \"../lib/helpers/tagLabel.js\"));\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ../../../lib/utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nvar TagsPage =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2.default)(TagsPage, _Component);\n\n  function TagsPage() {\n    (0, _classCallCheck2.default)(this, TagsPage);\n    return (0, _possibleConstructorReturn2.default)(this, (TagsPage.__proto__ || (0, _getPrototypeOf.default)(TagsPage)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(TagsPage, [{\n    key: \"init\",\n    value: function init() {\n      this.tags = (0, _sortTags.default)(app.store.all('tags').filter(function (tag) {\n        return !tag.parent();\n      }));\n      app.current = this;\n      app.history.push('tags', (0, _icon.default)('fa fa-th-large'));\n      app.drawer.hide();\n      app.modal.close();\n    }\n  }, {\n    key: \"view\",\n    value: function view() {\n      var pinned = this.tags.filter(function (tag) {\n        return tag.position() !== null;\n      });\n      var cloud = this.tags.filter(function (tag) {\n        return tag.position() === null;\n      });\n      return m(\"div\", {\n        className: \"TagsPage\"\n      }, _IndexPage.default.prototype.hero(), m(\"div\", {\n        className: \"container\"\n      }, m(\"nav\", {\n        className: \"TagsPage-nav IndexPage-nav sideNav\",\n        config: _IndexPage.default.prototype.affixSidebar\n      }, m(\"ul\", null, (0, _listItems.default)(_IndexPage.default.prototype.sidebarItems().toArray()))), m(\"div\", {\n        className: \"TagsPage-content sideNavOffset\"\n      }, m(\"ul\", {\n        className: \"TagTiles\"\n      }, pinned.map(function (tag) {\n        var lastDiscussion = tag.lastDiscussion();\n        var children = (0, _sortTags.default)(app.store.all('tags').filter(function (child) {\n          return child.parent() === tag;\n        }));\n        return m(\"li\", {\n          className: 'TagTile ' + (tag.color() ? 'colored' : ''),\n          style: {\n            backgroundColor: tag.color()\n          }\n        }, m(\"a\", {\n          className: \"TagTile-info\",\n          href: app.route.tag(tag),\n          config: m.route\n        }, m(\"h3\", {\n          className: \"TagTile-name\"\n        }, tag.name()), m(\"p\", {\n          className: \"TagTile-description\"\n        }, tag.description()), children ? m(\"div\", {\n          className: \"TagTile-children\"\n        }, children.map(function (child) {\n          return [m(\"a\", {\n            href: app.route.tag(child),\n            config: function config(element, isInitialized) {\n              if (isInitialized) return;\n              $(element).on('click', function (e) {\n                return e.stopPropagation();\n              });\n              m.route.apply(this, arguments);\n            }\n          }, child.name()), ' '];\n        })) : ''), lastDiscussion ? m(\"a\", {\n          className: \"TagTile-lastDiscussion\",\n          href: app.route.discussion(lastDiscussion, lastDiscussion.lastPostNumber()),\n          config: m.route\n        }, m(\"span\", {\n          className: \"TagTile-lastDiscussion-title\"\n        }, lastDiscussion.title()), (0, _humanTime.default)(lastDiscussion.lastTime())) : m(\"span\", {\n          className: \"TagTile-lastDiscussion\"\n        }));\n      })), cloud.length ? m(\"div\", {\n        className: \"TagCloud\"\n      }, cloud.map(function (tag) {\n        var color = tag.color();\n        return [(0, _tagLabel.default)(tag, {\n          link: true\n        }), ' '];\n      })) : '')));\n    }\n  }]);\n  return TagsPage;\n}(_Component2.default);\n\nexports.default = TagsPage;\n\n//# sourceURL=webpack:///./src/components/TagsPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/assign */ \"./node_modules/@babel/runtime/core-js/object/assign.js\"));\n\nvar _Model = _interopRequireDefault(__webpack_require__(/*! flarum/Model */ \"flarum/Model\"));\n\nvar _Discussion = _interopRequireDefault(__webpack_require__(/*! flarum/models/Discussion */ \"flarum/models/Discussion\"));\n\nvar _IndexPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/IndexPage */ \"flarum/components/IndexPage\"));\n\nvar _Tag = _interopRequireDefault(__webpack_require__(/*! ../../lib/models/Tag */ \"../lib/models/Tag.js\"));\n\nvar _TagsPage = _interopRequireDefault(__webpack_require__(/*! ./components/TagsPage */ \"./src/components/TagsPage.js\"));\n\nvar _DiscussionTaggedPost = _interopRequireDefault(__webpack_require__(/*! ./components/DiscussionTaggedPost */ \"./src/components/DiscussionTaggedPost.js\"));\n\nvar _addTagList = _interopRequireDefault(__webpack_require__(/*! ./addTagList */ \"./src/addTagList.js\"));\n\nvar _addTagFilter = _interopRequireDefault(__webpack_require__(/*! ./addTagFilter */ \"./src/addTagFilter.js\"));\n\nvar _addTagLabels = _interopRequireDefault(__webpack_require__(/*! ./addTagLabels */ \"./src/addTagLabels.js\"));\n\nvar _addTagControl = _interopRequireDefault(__webpack_require__(/*! ./addTagControl */ \"./src/addTagControl.js\"));\n\nvar _addTagComposer = _interopRequireDefault(__webpack_require__(/*! ./addTagComposer */ \"./src/addTagComposer.js\"));\n\nvar _compat = _interopRequireDefault(__webpack_require__(/*! ./compat */ \"./src/compat.js\"));\n\nvar _flarum = __webpack_require__(/*! flarum */ \"flarum\");\n\napp.initializers.add('flarum-tags', function (app) {\n  app.routes.tags = {\n    path: '/tags',\n    component: _TagsPage.default.component()\n  };\n  app.routes.tag = {\n    path: '/t/:tags',\n    component: _IndexPage.default.component()\n  };\n\n  app.route.tag = function (tag) {\n    return app.route('tag', {\n      tags: tag.slug()\n    });\n  };\n\n  app.postComponents.discussionTagged = _DiscussionTaggedPost.default;\n  app.store.models.tags = _Tag.default;\n  _Discussion.default.prototype.tags = _Model.default.hasMany('tags');\n  _Discussion.default.prototype.canTag = _Model.default.attribute('canTag');\n  (0, _addTagList.default)();\n  (0, _addTagFilter.default)();\n  (0, _addTagLabels.default)();\n  (0, _addTagControl.default)();\n  (0, _addTagComposer.default)();\n}); // Expose compat API\n\n(0, _assign.default)(_flarum.compat, _compat.default);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "flarum":
/*!*************************!*\
  !*** external "flarum" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum;\n\n//# sourceURL=webpack:///external_%22flarum%22?");

/***/ }),

/***/ "flarum/Component":
/*!*********************************************!*\
  !*** external "flarum.compat['Component']" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['Component'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'Component'%5D%22?");

/***/ }),

/***/ "flarum/Model":
/*!*****************************************!*\
  !*** external "flarum.compat['Model']" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['Model'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'Model'%5D%22?");

/***/ }),

/***/ "flarum/components/Button":
/*!*****************************************************!*\
  !*** external "flarum.compat['components/Button']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/Button'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/Button'%5D%22?");

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!*****************************************************************!*\
  !*** external "flarum.compat['components/DiscussionComposer']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/DiscussionComposer'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/DiscussionComposer'%5D%22?");

/***/ }),

/***/ "flarum/components/DiscussionHero":
/*!*************************************************************!*\
  !*** external "flarum.compat['components/DiscussionHero']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/DiscussionHero'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/DiscussionHero'%5D%22?");

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!*************************************************************!*\
  !*** external "flarum.compat['components/DiscussionList']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/DiscussionList'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/DiscussionList'%5D%22?");

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!*****************************************************************!*\
  !*** external "flarum.compat['components/DiscussionListItem']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/DiscussionListItem'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/DiscussionListItem'%5D%22?");

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!*************************************************************!*\
  !*** external "flarum.compat['components/DiscussionPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/DiscussionPage'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/DiscussionPage'%5D%22?");

/***/ }),

/***/ "flarum/components/EventPost":
/*!********************************************************!*\
  !*** external "flarum.compat['components/EventPost']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/EventPost'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/EventPost'%5D%22?");

/***/ }),

/***/ "flarum/components/IndexPage":
/*!********************************************************!*\
  !*** external "flarum.compat['components/IndexPage']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/IndexPage'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/IndexPage'%5D%22?");

/***/ }),

/***/ "flarum/components/LinkButton":
/*!*********************************************************!*\
  !*** external "flarum.compat['components/LinkButton']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/LinkButton'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/LinkButton'%5D%22?");

/***/ }),

/***/ "flarum/components/Modal":
/*!****************************************************!*\
  !*** external "flarum.compat['components/Modal']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/Modal'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/Modal'%5D%22?");

/***/ }),

/***/ "flarum/components/Separator":
/*!********************************************************!*\
  !*** external "flarum.compat['components/Separator']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/Separator'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/Separator'%5D%22?");

/***/ }),

/***/ "flarum/extend":
/*!******************************************!*\
  !*** external "flarum.compat['extend']" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['extend'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'extend'%5D%22?");

/***/ }),

/***/ "flarum/helpers/highlight":
/*!*****************************************************!*\
  !*** external "flarum.compat['helpers/highlight']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['helpers/highlight'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'helpers/highlight'%5D%22?");

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!*****************************************************!*\
  !*** external "flarum.compat['helpers/humanTime']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['helpers/humanTime'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'helpers/humanTime'%5D%22?");

/***/ }),

/***/ "flarum/helpers/icon":
/*!************************************************!*\
  !*** external "flarum.compat['helpers/icon']" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['helpers/icon'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'helpers/icon'%5D%22?");

/***/ }),

/***/ "flarum/helpers/listItems":
/*!*****************************************************!*\
  !*** external "flarum.compat['helpers/listItems']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['helpers/listItems'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'helpers/listItems'%5D%22?");

/***/ }),

/***/ "flarum/models/Discussion":
/*!*****************************************************!*\
  !*** external "flarum.compat['models/Discussion']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['models/Discussion'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'models/Discussion'%5D%22?");

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!************************************************************!*\
  !*** external "flarum.compat['utils/DiscussionControls']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/DiscussionControls'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/DiscussionControls'%5D%22?");

/***/ }),

/***/ "flarum/utils/KeyboardNavigatable":
/*!*************************************************************!*\
  !*** external "flarum.compat['utils/KeyboardNavigatable']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/KeyboardNavigatable'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/KeyboardNavigatable'%5D%22?");

/***/ }),

/***/ "flarum/utils/classList":
/*!***************************************************!*\
  !*** external "flarum.compat['utils/classList']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/classList'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/classList'%5D%22?");

/***/ }),

/***/ "flarum/utils/computed":
/*!**************************************************!*\
  !*** external "flarum.compat['utils/computed']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/computed'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/computed'%5D%22?");

/***/ }),

/***/ "flarum/utils/extract":
/*!*************************************************!*\
  !*** external "flarum.compat['utils/extract']" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/extract'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/extract'%5D%22?");

/***/ }),

/***/ "flarum/utils/extractText":
/*!*****************************************************!*\
  !*** external "flarum.compat['utils/extractText']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/extractText'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/extractText'%5D%22?");

/***/ }),

/***/ "flarum/utils/mixin":
/*!***********************************************!*\
  !*** external "flarum.compat['utils/mixin']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/mixin'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/mixin'%5D%22?");

/***/ })

/******/ });