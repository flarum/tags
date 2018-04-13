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

/***/ "./bower_components/html.sortable/dist/html.sortable.js":
/*!**************************************************************!*\
  !*** ./bower_components/html.sortable/dist/html.sortable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\n;\n\n(function (root, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"jquery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this, function ($) {\n  /*\n   * HTML5 Sortable jQuery Plugin\n   * https://github.com/voidberg/html5sortable\n   *\n   * Original code copyright 2012 Ali Farhadi.\n   * This version is mantained by Alexandru Badiu <andu@ctrlz.ro> & Lukas Oppermann <lukas@vea.re>\n   *\n   *\n   * Released under the MIT license.\n   */\n  'use strict';\n  /*\n   * variables global to the plugin\n   */\n\n  var dragging;\n  var draggingHeight;\n  var placeholders = $();\n  var sortables = [];\n  /*\n   * remove event handlers from items\n   * @param [jquery Collection] items\n   * @info event.h5s (jquery way of namespacing events, to bind multiple handlers to the event)\n   */\n\n  var _removeItemEvents = function _removeItemEvents(items) {\n    items.off('dragstart.h5s');\n    items.off('dragend.h5s');\n    items.off('selectstart.h5s');\n    items.off('dragover.h5s');\n    items.off('dragenter.h5s');\n    items.off('drop.h5s');\n  };\n  /*\n   * remove event handlers from sortable\n   * @param [jquery Collection] sortable\n   * @info event.h5s (jquery way of namespacing events, to bind multiple handlers to the event)\n   */\n\n\n  var _removeSortableEvents = function _removeSortableEvents(sortable) {\n    sortable.off('dragover.h5s');\n    sortable.off('dragenter.h5s');\n    sortable.off('drop.h5s');\n  };\n  /*\n   * attache ghost to dataTransfer object\n   * @param [event] original event\n   * @param [object] ghost-object with item, x and y coordinates\n   */\n\n\n  var _attachGhost = function _attachGhost(event, ghost) {\n    // this needs to be set for HTML5 drag & drop to work\n    event.dataTransfer.effectAllowed = 'move';\n    event.dataTransfer.setData('text', ''); // check if setDragImage method is available\n\n    if (event.dataTransfer.setDragImage) {\n      event.dataTransfer.setDragImage(ghost.item, ghost.x, ghost.y);\n    }\n  };\n  /**\n   * _addGhostPos clones the dragged item and adds it as a Ghost item\n   * @param [object] event - the event fired when dragstart is triggered\n   * @param [object] ghost - .item = node, draggedItem = jQuery collection\n   */\n\n\n  var _addGhostPos = function _addGhostPos(e, ghost) {\n    if (!ghost.x) {\n      ghost.x = parseInt(e.pageX - ghost.draggedItem.offset().left);\n    }\n\n    if (!ghost.y) {\n      ghost.y = parseInt(e.pageY - ghost.draggedItem.offset().top);\n    }\n\n    return ghost;\n  };\n  /**\n   * _makeGhost decides which way to make a ghost and passes it to attachGhost\n   * @param [jQuery selection] $draggedItem - the item that the user drags\n   */\n\n\n  var _makeGhost = function _makeGhost($draggedItem) {\n    return {\n      item: $draggedItem[0],\n      draggedItem: $draggedItem\n    };\n  };\n  /**\n   * _getGhost constructs ghost and attaches it to dataTransfer\n   * @param [event] event - the original drag event object\n   * @param [jQuery selection] $draggedItem - the item that the user drags\n   * @param [object] ghostOpt - the ghost options\n   */\n  // TODO: could $draggedItem be replaced by event.target in all instances\n\n\n  var _getGhost = function _getGhost(event, $draggedItem) {\n    // add ghost item & draggedItem to ghost object\n    var ghost = _makeGhost($draggedItem); // attach ghost position\n\n\n    ghost = _addGhostPos(event, ghost); // attach ghost to dataTransfer\n\n    _attachGhost(event, ghost);\n  };\n  /*\n   * return options if not set on sortable already\n   * @param [object] soptions\n   * @param [object] options\n   */\n\n\n  var _getOptions = function _getOptions(soptions, options) {\n    if (typeof soptions === 'undefined') {\n      return options;\n    }\n\n    return soptions;\n  };\n  /*\n   * remove data from sortable\n   * @param [jquery Collection] a single sortable\n   */\n\n\n  var _removeSortableData = function _removeSortableData(sortable) {\n    sortable.removeData('opts');\n    sortable.removeData('connectWith');\n    sortable.removeData('items');\n    sortable.removeAttr('aria-dropeffect');\n  };\n  /*\n   * remove data from items\n   * @param [jquery Collection] items\n   */\n\n\n  var _removeItemData = function _removeItemData(items) {\n    items.removeAttr('aria-grabbed');\n    items.removeAttr('draggable');\n    items.removeAttr('role');\n  };\n  /*\n   * check if two lists are connected\n   * @param [jquery Collection] items\n   */\n\n\n  var _listsConnected = function _listsConnected(curList, destList) {\n    if (curList[0] === destList[0]) {\n      return true;\n    }\n\n    if (curList.data('connectWith') !== undefined) {\n      return curList.data('connectWith') === destList.data('connectWith');\n    }\n\n    return false;\n  };\n  /*\n   * destroy the sortable\n   * @param [jquery Collection] a single sortable\n   */\n\n\n  var _destroySortable = function _destroySortable(sortable) {\n    var opts = sortable.data('opts') || {};\n    var items = sortable.children(opts.items);\n    var handles = opts.handle ? items.find(opts.handle) : items; // remove event handlers & data from sortable\n\n    _removeSortableEvents(sortable);\n\n    _removeSortableData(sortable); // remove event handlers & data from items\n\n\n    handles.off('mousedown.h5s');\n\n    _removeItemEvents(items);\n\n    _removeItemData(items);\n  };\n  /*\n   * enable the sortable\n   * @param [jquery Collection] a single sortable\n   */\n\n\n  var _enableSortable = function _enableSortable(sortable) {\n    var opts = sortable.data('opts');\n    var items = sortable.children(opts.items);\n    var handles = opts.handle ? items.find(opts.handle) : items;\n    sortable.attr('aria-dropeffect', 'move');\n    handles.attr('draggable', 'true'); // IE FIX for ghost\n    // can be disabled as it has the side effect that other events\n    // (e.g. click) will be ignored\n\n    if (typeof document.createElement('span').dragDrop === 'function' && !opts.disableIEFix) {\n      handles.on('mousedown.h5s', function () {\n        if (items.index(this) !== -1) {\n          this.dragDrop();\n        } else {\n          $(this).parents(opts.items)[0].dragDrop();\n        }\n      });\n    }\n  };\n  /*\n   * disable the sortable\n   * @param [jquery Collection] a single sortable\n   */\n\n\n  var _disableSortable = function _disableSortable(sortable) {\n    var opts = sortable.data('opts');\n    var items = sortable.children(opts.items);\n    var handles = opts.handle ? items.find(opts.handle) : items;\n    sortable.attr('aria-dropeffect', 'none');\n    handles.attr('draggable', false);\n    handles.off('mousedown.h5s');\n  };\n  /*\n   * reload the sortable\n   * @param [jquery Collection] a single sortable\n   * @description events need to be removed to not be double bound\n   */\n\n\n  var _reloadSortable = function _reloadSortable(sortable) {\n    var opts = sortable.data('opts');\n    var items = sortable.children(opts.items);\n    var handles = opts.handle ? items.find(opts.handle) : items; // remove event handlers from items\n\n    _removeItemEvents(items);\n\n    handles.off('mousedown.h5s'); // remove event handlers from sortable\n\n    _removeSortableEvents(sortable);\n  };\n  /*\n   * public sortable object\n   * @param [object|string] options|method\n   */\n\n\n  var sortable = function sortable(selector, options) {\n    var $sortables = $(selector);\n    var method = String(options);\n    options = $.extend({\n      connectWith: false,\n      placeholder: null,\n      // dragImage can be null or a jQuery element\n      dragImage: null,\n      disableIEFix: false,\n      placeholderClass: 'sortable-placeholder',\n      draggingClass: 'sortable-dragging'\n    }, options);\n    /* TODO: maxstatements should be 25, fix and remove line below */\n\n    /*jshint maxstatements:false */\n\n    return $sortables.each(function () {\n      var $sortable = $(this);\n\n      if (/enable|disable|destroy/.test(method)) {\n        sortable[method]($sortable);\n        return;\n      } // get options & set options on sortable\n\n\n      options = _getOptions($sortable.data('opts'), options);\n      $sortable.data('opts', options); // reset sortable\n\n      _reloadSortable($sortable); // initialize\n\n\n      var items = $sortable.children(options.items);\n      var index;\n      var startParent;\n      var newParent;\n      var placeholder = options.placeholder === null ? $('<' + (/^ul|ol$/i.test(this.tagName) ? 'li' : 'div') + ' class=\"' + options.placeholderClass + '\"/>') : $(options.placeholder).addClass(options.placeholderClass); // setup sortable ids\n\n      if (!$sortable.attr('data-sortable-id')) {\n        var id = sortables.length;\n        sortables[id] = $sortable;\n        $sortable.attr('data-sortable-id', id);\n        items.attr('data-item-sortable-id', id);\n      }\n\n      $sortable.data('items', options.items);\n      placeholders = placeholders.add(placeholder);\n\n      if (options.connectWith) {\n        $sortable.data('connectWith', options.connectWith);\n      }\n\n      _enableSortable($sortable);\n\n      items.attr('role', 'option');\n      items.attr('aria-grabbed', 'false'); // Handle drag events on draggable items\n\n      items.on('dragstart.h5s', function (e) {\n        e.stopImmediatePropagation();\n\n        if (options.dragImage) {\n          _attachGhost(e.originalEvent, {\n            item: options.dragImage,\n            x: 0,\n            y: 0\n          });\n\n          console.log('WARNING: dragImage option is deprecated' + ' and will be removed in the future!');\n        } else {\n          // add transparent clone or other ghost to cursor\n          _getGhost(e.originalEvent, $(this), options.dragImage);\n        } // cache selsection & add attr for dragging\n\n\n        dragging = $(this);\n        dragging.addClass(options.draggingClass);\n        dragging.attr('aria-grabbed', 'true'); // grab values\n\n        index = dragging.index();\n        draggingHeight = dragging.height();\n        startParent = $(this).parent(); // trigger sortstar update\n\n        dragging.parent().triggerHandler('sortstart', {\n          item: dragging,\n          startparent: startParent\n        });\n      }); // Handle drag events on draggable items\n\n      items.on('dragend.h5s', function () {\n        if (!dragging) {\n          return;\n        } // remove dragging attributes and show item\n\n\n        dragging.removeClass(options.draggingClass);\n        dragging.attr('aria-grabbed', 'false');\n        dragging.show();\n        placeholders.detach();\n        newParent = $(this).parent();\n        dragging.parent().triggerHandler('sortstop', {\n          item: dragging,\n          startparent: startParent\n        });\n\n        if (index !== dragging.index() || startParent.get(0) !== newParent.get(0)) {\n          dragging.parent().triggerHandler('sortupdate', {\n            item: dragging,\n            index: newParent.children(newParent.data('items')).index(dragging),\n            oldindex: items.index(dragging),\n            elementIndex: dragging.index(),\n            oldElementIndex: index,\n            startparent: startParent,\n            endparent: newParent\n          });\n        }\n\n        dragging = null;\n        draggingHeight = null;\n      }); // Handle drop event on sortable & placeholder\n      // TODO: REMOVE placeholder?????\n\n      $(this).add([placeholder]).on('drop.h5s', function (e) {\n        if (!_listsConnected($sortable, $(dragging).parent())) {\n          return;\n        }\n\n        e.stopPropagation();\n        placeholders.filter(':visible').after(dragging);\n        dragging.trigger('dragend.h5s');\n        return false;\n      }); // Handle dragover and dragenter events on draggable items\n      // TODO: REMOVE placeholder?????\n\n      items.add([this, placeholder]).on('dragover.h5s dragenter.h5s', function (e) {\n        if (!_listsConnected($sortable, $(dragging).parent())) {\n          return;\n        }\n\n        e.preventDefault();\n        e.originalEvent.dataTransfer.dropEffect = 'move';\n\n        if (items.is(this)) {\n          var thisHeight = $(this).height();\n\n          if (options.forcePlaceholderSize) {\n            placeholder.height(draggingHeight);\n          } // Check if $(this) is bigger than the draggable. If it is, we have to define a dead zone to prevent flickering\n\n\n          if (thisHeight > draggingHeight) {\n            // Dead zone?\n            var deadZone = thisHeight - draggingHeight;\n            var offsetTop = $(this).offset().top;\n\n            if (placeholder.index() < $(this).index() && e.originalEvent.pageY < offsetTop + deadZone) {\n              return false;\n            }\n\n            if (placeholder.index() > $(this).index() && e.originalEvent.pageY > offsetTop + thisHeight - deadZone) {\n              return false;\n            }\n          }\n\n          dragging.hide();\n\n          if (placeholder.index() < $(this).index()) {\n            $(this).after(placeholder);\n          } else {\n            $(this).before(placeholder);\n          }\n\n          placeholders.not(placeholder).detach();\n        } else {\n          if (!placeholders.is(this) && !$(this).children(options.items).length) {\n            placeholders.detach();\n            $(this).append(placeholder);\n          }\n        }\n\n        return false;\n      });\n    });\n  };\n\n  sortable.destroy = function (sortable) {\n    _destroySortable(sortable);\n  };\n\n  sortable.enable = function (sortable) {\n    _enableSortable(sortable);\n  };\n\n  sortable.disable = function (sortable) {\n    _disableSortable(sortable);\n  };\n\n  $.fn.sortable = function (options) {\n    return sortable(this, options);\n  };\n\n  return sortable;\n});\n\n//# sourceURL=webpack:///./bower_components/html.sortable/dist/html.sortable.js?");

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

/***/ "./src/addTagChangePermission.js":
/*!***************************************!*\
  !*** ./src/addTagChangePermission.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _PermissionGrid = _interopRequireDefault(__webpack_require__(/*! flarum/components/PermissionGrid */ \"flarum/components/PermissionGrid\"));\n\nvar _SettingDropdown = _interopRequireDefault(__webpack_require__(/*! flarum/components/SettingDropdown */ \"flarum/components/SettingDropdown\"));\n\nfunction _default() {\n  (0, _extend.extend)(_PermissionGrid.default.prototype, 'startItems', function (items) {\n    items.add('allowTagChange', {\n      icon: 'fa fa-tag',\n      label: app.translator.trans('flarum-tags.admin.permissions.allow_edit_tags_label'),\n      setting: function setting() {\n        var minutes = parseInt(app.data.settings.allow_tag_change, 10);\n        return _SettingDropdown.default.component({\n          defaultLabel: minutes ? app.translator.transChoice('core.admin.permissions_controls.allow_some_minutes_button', minutes, {\n            count: minutes\n          }) : app.translator.trans('core.admin.permissions_controls.allow_indefinitely_button'),\n          key: 'allow_tag_change',\n          options: [{\n            value: '-1',\n            label: app.translator.trans('core.admin.permissions_controls.allow_indefinitely_button')\n          }, {\n            value: '10',\n            label: app.translator.trans('core.admin.permissions_controls.allow_ten_minutes_button')\n          }, {\n            value: 'reply',\n            label: app.translator.trans('core.admin.permissions_controls.allow_until_reply_button')\n          }]\n        });\n      }\n    }, 90);\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagChangePermission.js?");

/***/ }),

/***/ "./src/addTagPermission.js":
/*!*********************************!*\
  !*** ./src/addTagPermission.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _PermissionGrid = _interopRequireDefault(__webpack_require__(/*! flarum/components/PermissionGrid */ \"flarum/components/PermissionGrid\"));\n\nfunction _default() {\n  (0, _extend.extend)(_PermissionGrid.default.prototype, 'moderateItems', function (items) {\n    items.add('tag', {\n      icon: 'fa fa-tag',\n      label: app.translator.trans('flarum-tags.admin.permissions.tag_discussions_label'),\n      permission: 'discussion.tag'\n    }, 95);\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagPermission.js?");

/***/ }),

/***/ "./src/addTagsHomePageOption.js":
/*!**************************************!*\
  !*** ./src/addTagsHomePageOption.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _BasicsPage = _interopRequireDefault(__webpack_require__(/*! flarum/components/BasicsPage */ \"flarum/components/BasicsPage\"));\n\nfunction _default() {\n  (0, _extend.extend)(_BasicsPage.default.prototype, 'homePageItems', function (items) {\n    items.add('tags', {\n      path: '/tags',\n      label: app.translator.trans('flarum-tags.admin.basics.tags_label')\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagsHomePageOption.js?");

/***/ }),

/***/ "./src/addTagsPane.js":
/*!****************************!*\
  !*** ./src/addTagsPane.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _AdminNav = _interopRequireDefault(__webpack_require__(/*! flarum/components/AdminNav */ \"flarum/components/AdminNav\"));\n\nvar _AdminLinkButton = _interopRequireDefault(__webpack_require__(/*! flarum/components/AdminLinkButton */ \"flarum/components/AdminLinkButton\"));\n\nvar _TagsPage = _interopRequireDefault(__webpack_require__(/*! ./components/TagsPage */ \"./src/components/TagsPage.js\"));\n\nfunction _default() {\n  app.routes.tags = {\n    path: '/tags',\n    component: _TagsPage.default.component()\n  };\n\n  app.extensionSettings['flarum-tags'] = function () {\n    return m.route(app.route('tags'));\n  };\n\n  (0, _extend.extend)(_AdminNav.default.prototype, 'items', function (items) {\n    items.add('tags', _AdminLinkButton.default.component({\n      href: app.route('tags'),\n      icon: 'fa fa-tags',\n      children: app.translator.trans('flarum-tags.admin.nav.tags_button'),\n      description: app.translator.trans('flarum-tags.admin.nav.tags_text')\n    }));\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagsPane.js?");

/***/ }),

/***/ "./src/addTagsPermissionScope.js":
/*!***************************************!*\
  !*** ./src/addTagsPermissionScope.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _extend = __webpack_require__(/*! flarum/extend */ \"flarum/extend\");\n\nvar _PermissionGrid = _interopRequireDefault(__webpack_require__(/*! flarum/components/PermissionGrid */ \"flarum/components/PermissionGrid\"));\n\nvar _PermissionDropdown = _interopRequireDefault(__webpack_require__(/*! flarum/components/PermissionDropdown */ \"flarum/components/PermissionDropdown\"));\n\nvar _Dropdown = _interopRequireDefault(__webpack_require__(/*! flarum/components/Dropdown */ \"flarum/components/Dropdown\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! flarum/components/Button */ \"flarum/components/Button\"));\n\nvar _tagLabel = _interopRequireDefault(__webpack_require__(/*! ../../lib/helpers/tagLabel */ \"../lib/helpers/tagLabel.js\"));\n\nvar _tagIcon = _interopRequireDefault(__webpack_require__(/*! ../../lib/helpers/tagIcon */ \"../lib/helpers/tagIcon.js\"));\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ../../lib/utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nfunction _default() {\n  (0, _extend.override)(app, 'getRequiredPermissions', function (original, permission) {\n    var tagPrefix = permission.match(/^tag\\d+\\./);\n\n    if (tagPrefix) {\n      var globalPermission = permission.substr(tagPrefix[0].length);\n      var required = original(globalPermission);\n      return required.map(function (required) {\n        return tagPrefix[0] + required;\n      });\n    }\n\n    return original(permission);\n  });\n  (0, _extend.extend)(_PermissionGrid.default.prototype, 'scopeItems', function (items) {\n    (0, _sortTags.default)(app.store.all('tags')).filter(function (tag) {\n      return tag.isRestricted();\n    }).forEach(function (tag) {\n      return items.add('tag' + tag.id(), {\n        label: (0, _tagLabel.default)(tag),\n        onremove: function onremove() {\n          return tag.save({\n            isRestricted: false\n          });\n        },\n        render: function render(item) {\n          if (item.permission === 'viewDiscussions' || item.permission === 'startDiscussion' || item.permission && item.permission.indexOf('discussion.') === 0) {\n            return _PermissionDropdown.default.component({\n              permission: 'tag' + tag.id() + '.' + item.permission,\n              allowGuest: item.allowGuest\n            });\n          }\n\n          return '';\n        }\n      });\n    });\n  });\n  (0, _extend.extend)(_PermissionGrid.default.prototype, 'scopeControlItems', function (items) {\n    var tags = (0, _sortTags.default)(app.store.all('tags').filter(function (tag) {\n      return !tag.isRestricted();\n    }));\n\n    if (tags.length) {\n      items.add('tag', _Dropdown.default.component({\n        className: 'Dropdown--restrictByTag',\n        buttonClassName: 'Button Button--text',\n        label: app.translator.trans('flarum-tags.admin.permissions.restrict_by_tag_heading'),\n        icon: 'fa fa-plus',\n        caretIcon: null,\n        children: tags.map(function (tag) {\n          return _Button.default.component({\n            icon: true,\n            children: [(0, _tagIcon.default)(tag, {\n              className: 'Button-icon'\n            }), ' ', tag.name()],\n            onclick: function onclick() {\n              return tag.save({\n                isRestricted: true\n              });\n            }\n          });\n        })\n      }));\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/addTagsPermissionScope.js?");

/***/ }),

/***/ "./src/components/EditTagModal.js":
/*!****************************************!*\
  !*** ./src/components/EditTagModal.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/get.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _Modal2 = _interopRequireDefault(__webpack_require__(/*! flarum/components/Modal */ \"flarum/components/Modal\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! flarum/components/Button */ \"flarum/components/Button\"));\n\nvar _string = __webpack_require__(/*! flarum/utils/string */ \"flarum/utils/string\");\n\nvar _tagLabel = _interopRequireDefault(__webpack_require__(/*! ../../../lib/helpers/tagLabel */ \"../lib/helpers/tagLabel.js\"));\n\n/**\n * The `EditTagModal` component shows a modal dialog which allows the user\n * to create or edit a tag.\n */\nvar EditTagModal =\n/*#__PURE__*/\nfunction (_Modal) {\n  (0, _inherits2.default)(EditTagModal, _Modal);\n\n  function EditTagModal() {\n    (0, _classCallCheck2.default)(this, EditTagModal);\n    return (0, _possibleConstructorReturn2.default)(this, (EditTagModal.__proto__ || (0, _getPrototypeOf.default)(EditTagModal)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(EditTagModal, [{\n    key: \"init\",\n    value: function init() {\n      (0, _get2.default)(EditTagModal.prototype.__proto__ || (0, _getPrototypeOf.default)(EditTagModal.prototype), \"init\", this).call(this);\n      this.tag = this.props.tag || app.store.createRecord('tags');\n      this.name = m.prop(this.tag.name() || '');\n      this.slug = m.prop(this.tag.slug() || '');\n      this.description = m.prop(this.tag.description() || '');\n      this.color = m.prop(this.tag.color() || '');\n      this.isHidden = m.prop(this.tag.isHidden() || false);\n    }\n  }, {\n    key: \"className\",\n    value: function className() {\n      return 'EditTagModal Modal--small';\n    }\n  }, {\n    key: \"title\",\n    value: function title() {\n      return this.name() ? (0, _tagLabel.default)({\n        name: this.name,\n        color: this.color\n      }) : app.translator.trans('flarum-tags.admin.edit_tag.title');\n    }\n  }, {\n    key: \"content\",\n    value: function content() {\n      var _this = this;\n\n      return m(\"div\", {\n        className: \"Modal-body\"\n      }, m(\"div\", {\n        className: \"Form\"\n      }, m(\"div\", {\n        className: \"Form-group\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.edit_tag.name_label')), m(\"input\", {\n        className: \"FormControl\",\n        placeholder: app.translator.trans('flarum-tags.admin.edit_tag.name_placeholder'),\n        value: this.name(),\n        oninput: function oninput(e) {\n          _this.name(e.target.value);\n\n          _this.slug((0, _string.slug)(e.target.value));\n        }\n      })), m(\"div\", {\n        className: \"Form-group\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.edit_tag.slug_label')), m(\"input\", {\n        className: \"FormControl\",\n        value: this.slug(),\n        oninput: m.withAttr('value', this.slug)\n      })), m(\"div\", {\n        className: \"Form-group\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.edit_tag.description_label')), m(\"textarea\", {\n        className: \"FormControl\",\n        value: this.description(),\n        oninput: m.withAttr('value', this.description)\n      })), m(\"div\", {\n        className: \"Form-group\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.edit_tag.color_label')), m(\"input\", {\n        className: \"FormControl\",\n        placeholder: \"#aaaaaa\",\n        value: this.color(),\n        oninput: m.withAttr('value', this.color)\n      })), m(\"div\", {\n        className: \"Form-group\"\n      }, m(\"div\", null, m(\"label\", {\n        className: \"checkbox\"\n      }, m(\"input\", {\n        type: \"checkbox\",\n        value: \"1\",\n        checked: this.isHidden(),\n        onchange: m.withAttr('checked', this.isHidden)\n      }), app.translator.trans('flarum-tags.admin.edit_tag.hide_label')))), m(\"div\", {\n        className: \"Form-group\"\n      }, _Button.default.component({\n        type: 'submit',\n        className: 'Button Button--primary EditTagModal-save',\n        loading: this.loading,\n        children: app.translator.trans('flarum-tags.admin.edit_tag.submit_button')\n      }), this.tag.exists ? m(\"button\", {\n        type: \"button\",\n        className: \"Button EditTagModal-delete\",\n        onclick: this.delete.bind(this)\n      }, app.translator.trans('flarum-tags.admin.edit_tag.delete_tag_button')) : '')));\n    }\n  }, {\n    key: \"submitData\",\n    value: function submitData() {\n      return {\n        name: this.name(),\n        slug: this.slug(),\n        description: this.description(),\n        color: this.color(),\n        isHidden: this.isHidden()\n      };\n    }\n  }, {\n    key: \"onsubmit\",\n    value: function onsubmit(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      this.loading = true;\n      this.tag.save(this.submitData()).then(function () {\n        return _this2.hide();\n      }, function (response) {\n        _this2.loading = false;\n\n        _this2.handleErrors(response);\n      });\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete() {\n      var _this3 = this;\n\n      if (confirm(app.translator.trans('flarum-tags.admin.edit_tag.delete_tag_confirmation'))) {\n        var children = app.store.all('tags').filter(function (tag) {\n          return tag.parent() === _this3.tag;\n        });\n        this.tag.delete().then(function () {\n          children.forEach(function (tag) {\n            return tag.pushData({\n              attributes: {\n                isChild: false\n              },\n              relationships: {\n                parent: null\n              }\n            });\n          });\n          m.redraw();\n        });\n        this.hide();\n      }\n    }\n  }]);\n  return EditTagModal;\n}(_Modal2.default);\n\nexports.default = EditTagModal;\n\n//# sourceURL=webpack:///./src/components/EditTagModal.js?");

/***/ }),

/***/ "./src/components/TagSettingsModal.js":
/*!********************************************!*\
  !*** ./src/components/TagSettingsModal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _SettingsModal2 = _interopRequireDefault(__webpack_require__(/*! flarum/components/SettingsModal */ \"flarum/components/SettingsModal\"));\n\nvar TagSettingsModal =\n/*#__PURE__*/\nfunction (_SettingsModal) {\n  (0, _inherits2.default)(TagSettingsModal, _SettingsModal);\n\n  function TagSettingsModal() {\n    (0, _classCallCheck2.default)(this, TagSettingsModal);\n    return (0, _possibleConstructorReturn2.default)(this, (TagSettingsModal.__proto__ || (0, _getPrototypeOf.default)(TagSettingsModal)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(TagSettingsModal, [{\n    key: \"setMinTags\",\n    value: function setMinTags(minTags, maxTags, value) {\n      minTags(value);\n      maxTags(Math.max(value, maxTags()));\n    }\n  }, {\n    key: \"className\",\n    value: function className() {\n      return 'TagSettingsModal Modal--small';\n    }\n  }, {\n    key: \"title\",\n    value: function title() {\n      return app.translator.trans('flarum-tags.admin.tag_settings.title');\n    }\n  }, {\n    key: \"form\",\n    value: function form() {\n      var minPrimaryTags = this.setting('flarum-tags.min_primary_tags', 0);\n      var maxPrimaryTags = this.setting('flarum-tags.max_primary_tags', 0);\n      var minSecondaryTags = this.setting('flarum-tags.min_secondary_tags', 0);\n      var maxSecondaryTags = this.setting('flarum-tags.max_secondary_tags', 0);\n      return [m(\"div\", {\n        className: \"Form-group\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.tag_settings.required_primary_heading')), m(\"div\", {\n        className: \"helpText\"\n      }, app.translator.trans('flarum-tags.admin.tag_settings.required_primary_text')), m(\"div\", {\n        className: \"TagSettingsModal-rangeInput\"\n      }, m(\"input\", {\n        className: \"FormControl\",\n        type: \"number\",\n        min: \"0\",\n        value: minPrimaryTags(),\n        oninput: m.withAttr('value', this.setMinTags.bind(this, minPrimaryTags, maxPrimaryTags))\n      }), app.translator.trans('flarum-tags.admin.tag_settings.range_separator_text'), m(\"input\", {\n        className: \"FormControl\",\n        type: \"number\",\n        min: minPrimaryTags(),\n        bidi: maxPrimaryTags\n      }))), m(\"div\", {\n        className: \"Form-group\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.tag_settings.required_secondary_heading')), m(\"div\", {\n        className: \"helpText\"\n      }, app.translator.trans('flarum-tags.admin.tag_settings.required_secondary_text')), m(\"div\", {\n        className: \"TagSettingsModal-rangeInput\"\n      }, m(\"input\", {\n        className: \"FormControl\",\n        type: \"number\",\n        min: \"0\",\n        value: minSecondaryTags(),\n        oninput: m.withAttr('value', this.setMinTags.bind(this, minSecondaryTags, maxSecondaryTags))\n      }), app.translator.trans('flarum-tags.admin.tag_settings.range_separator_text'), m(\"input\", {\n        className: \"FormControl\",\n        type: \"number\",\n        min: minSecondaryTags(),\n        bidi: maxSecondaryTags\n      })))];\n    }\n  }]);\n  return TagSettingsModal;\n}(_SettingsModal2.default);\n\nexports.default = TagSettingsModal;\n\n//# sourceURL=webpack:///./src/components/TagSettingsModal.js?");

/***/ }),

/***/ "./src/components/TagsPage.js":
/*!************************************!*\
  !*** ./src/components/TagsPage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime/core-js/object/get-prototype-of.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _Page2 = _interopRequireDefault(__webpack_require__(/*! flarum/components/Page */ \"flarum/components/Page\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! flarum/components/Button */ \"flarum/components/Button\"));\n\nvar _EditTagModal = _interopRequireDefault(__webpack_require__(/*! ./EditTagModal */ \"./src/components/EditTagModal.js\"));\n\nvar _TagSettingsModal = _interopRequireDefault(__webpack_require__(/*! ./TagSettingsModal */ \"./src/components/TagSettingsModal.js\"));\n\nvar _tagIcon = _interopRequireDefault(__webpack_require__(/*! ../../../lib/helpers/tagIcon */ \"../lib/helpers/tagIcon.js\"));\n\nvar _sortTags = _interopRequireDefault(__webpack_require__(/*! ../../../lib/utils/sortTags */ \"../lib/utils/sortTags.js\"));\n\nfunction tagItem(tag) {\n  return m(\"li\", {\n    \"data-id\": tag.id(),\n    style: {\n      color: tag.color()\n    }\n  }, m(\"div\", {\n    className: \"TagListItem-info\"\n  }, (0, _tagIcon.default)(tag), m(\"span\", {\n    className: \"TagListItem-name\"\n  }, tag.name()), _Button.default.component({\n    className: 'Button Button--link',\n    icon: 'fa fa-pencil-alt',\n    onclick: function onclick() {\n      return app.modal.show(new _EditTagModal.default({\n        tag: tag\n      }));\n    }\n  })), !tag.isChild() && tag.position() !== null ? m(\"ol\", {\n    className: \"TagListItem-children\"\n  }, (0, _sortTags.default)(app.store.all('tags')).filter(function (child) {\n    return child.parent() === tag;\n  }).map(tagItem)) : '');\n}\n\nvar TagsPage =\n/*#__PURE__*/\nfunction (_Page) {\n  (0, _inherits2.default)(TagsPage, _Page);\n\n  function TagsPage() {\n    (0, _classCallCheck2.default)(this, TagsPage);\n    return (0, _possibleConstructorReturn2.default)(this, (TagsPage.__proto__ || (0, _getPrototypeOf.default)(TagsPage)).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(TagsPage, [{\n    key: \"view\",\n    value: function view() {\n      return m(\"div\", {\n        className: \"TagsPage\"\n      }, m(\"div\", {\n        className: \"TagsPage-header\"\n      }, m(\"div\", {\n        className: \"container\"\n      }, m(\"p\", null, app.translator.trans('flarum-tags.admin.tags.about_tags_text')), _Button.default.component({\n        className: 'Button Button--primary',\n        icon: 'fa fa-plus',\n        children: app.translator.trans('flarum-tags.admin.tags.create_tag_button'),\n        onclick: function onclick() {\n          return app.modal.show(new _EditTagModal.default());\n        }\n      }), _Button.default.component({\n        className: 'Button',\n        children: app.translator.trans('flarum-tags.admin.tags.settings_button'),\n        onclick: function onclick() {\n          return app.modal.show(new _TagSettingsModal.default());\n        }\n      }))), m(\"div\", {\n        className: \"TagsPage-list\"\n      }, m(\"div\", {\n        className: \"container\"\n      }, m(\"div\", {\n        className: \"TagGroup\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.tags.primary_heading')), m(\"ol\", {\n        className: \"TagList TagList--primary\"\n      }, (0, _sortTags.default)(app.store.all('tags')).filter(function (tag) {\n        return tag.position() !== null && !tag.isChild();\n      }).map(tagItem))), m(\"div\", {\n        className: \"TagGroup\"\n      }, m(\"label\", null, app.translator.trans('flarum-tags.admin.tags.secondary_heading')), m(\"ul\", {\n        className: \"TagList\"\n      }, app.store.all('tags').filter(function (tag) {\n        return tag.position() === null;\n      }).sort(function (a, b) {\n        return a.name().localeCompare(b.name());\n      }).map(tagItem))))));\n    }\n  }, {\n    key: \"config\",\n    value: function config() {\n      var _this = this;\n\n      this.$('ol, ul').sortable({\n        connectWith: 'primary'\n      }).on('sortupdate', function (e, ui) {\n        // If we've moved a tag from 'primary' to 'secondary', then we'll update\n        // its attributes in our local store so that when we redraw the change\n        // will be made.\n        if (ui.startparent.is('ol') && ui.endparent.is('ul')) {\n          app.store.getById('tags', ui.item.data('id')).pushData({\n            attributes: {\n              position: null,\n              isChild: false\n            },\n            relationships: {\n              parent: null\n            }\n          });\n        } // Construct an array of primary tag IDs and their children, in the same\n        // order that they have been arranged in.\n\n\n        var order = _this.$('.TagList--primary > li').map(function () {\n          return {\n            id: $(this).data('id'),\n            children: $(this).find('li').map(function () {\n              return $(this).data('id');\n            }).get()\n          };\n        }).get(); // Now that we have an accurate representation of the order which the\n        // primary tags are in, we will update the tag attributes in our local\n        // store to reflect this order.\n\n\n        order.forEach(function (tag, i) {\n          var parent = app.store.getById('tags', tag.id);\n          parent.pushData({\n            attributes: {\n              position: i,\n              isChild: false\n            },\n            relationships: {\n              parent: null\n            }\n          });\n          tag.children.forEach(function (child, j) {\n            app.store.getById('tags', child).pushData({\n              attributes: {\n                position: j,\n                isChild: true\n              },\n              relationships: {\n                parent: parent\n              }\n            });\n          });\n        });\n        app.request({\n          url: app.forum.attribute('apiUrl') + '/tags/order',\n          method: 'POST',\n          data: {\n            order: order\n          }\n        }); // A diff redraw won't work here, because sortable has mucked around\n        // with the DOM which will confuse Mithril's diffing algorithm. Instead\n        // we force a full reconstruction of the DOM.\n\n        m.redraw.strategy('all');\n        m.redraw();\n      });\n    }\n  }]);\n  return TagsPage;\n}(_Page2.default);\n\nexports.default = TagsPage;\n\n//# sourceURL=webpack:///./src/components/TagsPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\n__webpack_require__(/*! ../bower_components/html.sortable/dist/html.sortable.js */ \"./bower_components/html.sortable/dist/html.sortable.js\");\n\nvar _Tag = _interopRequireDefault(__webpack_require__(/*! ../../lib/models/Tag */ \"../lib/models/Tag.js\"));\n\nvar _addTagsPermissionScope = _interopRequireDefault(__webpack_require__(/*! ./addTagsPermissionScope */ \"./src/addTagsPermissionScope.js\"));\n\nvar _addTagPermission = _interopRequireDefault(__webpack_require__(/*! ./addTagPermission */ \"./src/addTagPermission.js\"));\n\nvar _addTagsPane = _interopRequireDefault(__webpack_require__(/*! ./addTagsPane */ \"./src/addTagsPane.js\"));\n\nvar _addTagsHomePageOption = _interopRequireDefault(__webpack_require__(/*! ./addTagsHomePageOption */ \"./src/addTagsHomePageOption.js\"));\n\nvar _addTagChangePermission = _interopRequireDefault(__webpack_require__(/*! ./addTagChangePermission */ \"./src/addTagChangePermission.js\"));\n\napp.initializers.add('flarum-tags', function (app) {\n  app.store.models.tags = _Tag.default;\n  console.log('hi');\n  (0, _addTagsPermissionScope.default)();\n  (0, _addTagPermission.default)();\n  (0, _addTagsPane.default)();\n  (0, _addTagsHomePageOption.default)();\n  (0, _addTagChangePermission.default)();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "flarum/Model":
/*!*****************************************!*\
  !*** external "flarum.compat['Model']" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['Model'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'Model'%5D%22?");

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!**************************************************************!*\
  !*** external "flarum.compat['components/AdminLinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/AdminLinkButton'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/AdminLinkButton'%5D%22?");

/***/ }),

/***/ "flarum/components/AdminNav":
/*!*******************************************************!*\
  !*** external "flarum.compat['components/AdminNav']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/AdminNav'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/AdminNav'%5D%22?");

/***/ }),

/***/ "flarum/components/BasicsPage":
/*!*********************************************************!*\
  !*** external "flarum.compat['components/BasicsPage']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/BasicsPage'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/BasicsPage'%5D%22?");

/***/ }),

/***/ "flarum/components/Button":
/*!*****************************************************!*\
  !*** external "flarum.compat['components/Button']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/Button'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/Button'%5D%22?");

/***/ }),

/***/ "flarum/components/Dropdown":
/*!*******************************************************!*\
  !*** external "flarum.compat['components/Dropdown']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/Dropdown'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/Dropdown'%5D%22?");

/***/ }),

/***/ "flarum/components/Modal":
/*!****************************************************!*\
  !*** external "flarum.compat['components/Modal']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/Modal'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/Modal'%5D%22?");

/***/ }),

/***/ "flarum/components/Page":
/*!***************************************************!*\
  !*** external "flarum.compat['components/Page']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/Page'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/Page'%5D%22?");

/***/ }),

/***/ "flarum/components/PermissionDropdown":
/*!*****************************************************************!*\
  !*** external "flarum.compat['components/PermissionDropdown']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/PermissionDropdown'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/PermissionDropdown'%5D%22?");

/***/ }),

/***/ "flarum/components/PermissionGrid":
/*!*************************************************************!*\
  !*** external "flarum.compat['components/PermissionGrid']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/PermissionGrid'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/PermissionGrid'%5D%22?");

/***/ }),

/***/ "flarum/components/SettingDropdown":
/*!**************************************************************!*\
  !*** external "flarum.compat['components/SettingDropdown']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/SettingDropdown'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/SettingDropdown'%5D%22?");

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!************************************************************!*\
  !*** external "flarum.compat['components/SettingsModal']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['components/SettingsModal'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'components/SettingsModal'%5D%22?");

/***/ }),

/***/ "flarum/extend":
/*!******************************************!*\
  !*** external "flarum.compat['extend']" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['extend'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'extend'%5D%22?");

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

/***/ "flarum/utils/mixin":
/*!***********************************************!*\
  !*** external "flarum.compat['utils/mixin']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/mixin'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/mixin'%5D%22?");

/***/ }),

/***/ "flarum/utils/string":
/*!************************************************!*\
  !*** external "flarum.compat['utils/string']" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = flarum.compat['utils/string'];\n\n//# sourceURL=webpack:///external_%22flarum.compat%5B'utils/string'%5D%22?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });