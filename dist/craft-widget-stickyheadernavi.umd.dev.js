(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Craft"));
	else if(typeof define === 'function' && define.amd)
		define(["Craft"], factory);
	else if(typeof exports === 'object')
		exports["StickyHeaderNavi"] = factory(require("Craft"));
	else
		root["StickyHeaderNavi"] = factory(root["Craft"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__craftkit_craft_uikit__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst StickyHeaderNavi = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\nmodule.exports = StickyHeaderNavi.default || StickyHeaderNavi;\n\n\n//# sourceURL=webpack://StickyHeaderNavi/./index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_ViewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ViewController.js */ \"./src/ViewController.js\");\n/* harmony import */ var _src_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Header.js */ \"./src/Header.js\");\n/* harmony import */ var _src_BackButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/BackButton.js */ \"./src/BackButton.js\");\n/* harmony import */ var _src_Page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Page.js */ \"./src/Page.js\");\n\n\n\n\n\n\nconst Packages = {\n\tViewController : _src_ViewController_js__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"],\n\tHeader         : _src_Header_js__WEBPACK_IMPORTED_MODULE_1__[\"Header\"],\n\tBackButton     : _src_BackButton_js__WEBPACK_IMPORTED_MODULE_2__[\"BackButton\"],\n\tPage           : _src_Page_js__WEBPACK_IMPORTED_MODULE_3__[\"Page\"]\n};\n\nPackages.inject = function(Craft){\n\tCraft.Widget = Craft.Widget || {};\n\tif( !Craft.Widget.StickyHeaderNavi ){\n\t\tCraft.Widget.StickyHeaderNavi = Packages;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Packages);\n\n\n\n//# sourceURL=webpack://StickyHeaderNavi/./main.js?");

/***/ }),

/***/ "./src/BackButton.js":
/*!***************************!*\
  !*** ./src/BackButton.js ***!
  \***************************/
/*! exports provided: BackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackButton\", function() { return BackButton; });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * Abstruct Header\n * \n * Extend this class and make your navigation with it.\n * \n * @packagename Craft.Widget.StickyHeaderNavi.BackButton\n */\nclass BackButton extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * BackButton constructor\n\t * \n\t * @param {Object} options - options (optinal)\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\tthis.packagename = 'Craft.Widget.StickyHeaderNavi.BackButton';\n\t}\n\t\n\t/**\n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t:host {\n\t\t\t\tdisplay: none;\n\t\t\t\tfloat: left;\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tpadding-top: env(safe-area-inset-top);\n\t\t\t\tpadding-left: env(safe-area-inset-left);\n\t\t\t}\n\t\t\t.root {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\tmargin-top: -3px;\n\t\t\t\tcolor: #000;\n\t\t\t\tfont-size: 36px;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 44px;\n\t\t\t\tfont-family: 'Arial-BoldMT';\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/**\n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\" onclick=\"window.Craft.Core.ComponentStack.get('${componentId}').getViewController().back();\">‹</div>\n\t\t`;\n\t}\n\n};\n\n\n//# sourceURL=webpack://StickyHeaderNavi/./src/BackButton.js?");

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * Abstruct Header\n * \n * Extend this class, and implement your header.\n * \n * @packagename Craft.Widget.StickyHeaderNavi.Header\n * \n * @example\n * \n * // Below case, MyHeader overwriting default sliding in/out behaviour,\n * // to delegate what element should be slide in/out.\n * \n * class MyHeader extends Craft.Widget.StickyHeaderNavi.Header {\n *     onAppearBackButton(){\n *         this.large.slideOutTitle();\n *         this.small.slideOutTitle();\n *     }\n *     onDisappearBackButton(){\n *         this.large.slideInTitle();\n *         this.small.slideInTitle();\n *     }\n * }\n * \n * class MyLargeHeaderView {\n *     viewDidLoad(){\n *         this.title = this.shadow.getElementById('title');\n *     }\n *     slideOutTitle(){\n *         this.title.classList.add(\"slide_out\");\n *         this.title.classList.remove(\"slide_in\");\n *     }\n *     slideInTitle(){\n *         this.mail.classList.remove(\"slide_out\");\n *         this.mail.classList.add(\"slide_in\");\n *     }\n *     template(){\n *         return `\n *             <div>\n *                 <div id=\"title\">Slide in/out by back button visibility</div>\n *                 <div id=\"navi\">always on the center</div>\n *             </div>\n *         `;\n *     }\n * }\n * \n * class MySmallHeaderView {\n *     :\n * }\n * \n * let header = new MyHeader({\n *     large : new MyLargeHeaderView(),\n *     small : new MySmallHeaderView()\n * });\n * \n */\nclass Header extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * Header constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {Craft.UI.View|Craft.UI.ViewController} options.large - header view in large state\n\t * @param {Craft.UI.View|Craft.UI.ViewController} options.small - header view in small(sticky) state\n\t */\n\tconstructor(options){\n\t\tif( !options ){ options = {}; }\n\t\t\n\t\tsuper(options);\n\t\t\n\t\tthis.packagename = 'Craft.Widget.StickyHeaderNavi.Header';\n\t\t\n\t\tthis.large = options.large;\n\t\tthis.small = options.small;\n\t}\n\t\n\t/** \n\t * viewDidLoad\n\t * \n\t * setup controlled elements\n\t * \n\t * @override\n\t * @protected\n\t */\n\tviewDidLoad(){\n\t\tthis.large_holder = this.shadow.getElementById(\"large\");\n\t\tthis.small_holder = this.shadow.getElementById(\"small\");\n\t\t\n\t\tthis.large.setViewController(this.viewController);\n\t\tthis.large.loadView();\n\t\tthis.large.viewWillAppear();\n\t\tthis.large_holder.appendChild(this.large.view);\n\t\tthis.large.viewDidAppear();\n\t\t\n\t\tthis.small.setViewController(this.viewController);\n\t\tthis.small.loadView();\n\t\tthis.small.viewWillAppear();\n\t\tthis.small_holder.appendChild(this.small.view);\n\t\tthis.small.viewDidAppear();\n\t}\n\t\n\t/** \n\t * Return the height in lerge state\n\t * \n\t * The height of large view should be defined in its root style.\n\t * \n\t * But, if you would like to make dynamically defined header elements, \n\t * you have to calculate your header's height in your implementaion.\n\t * \n\t * @example\n\t * \n\t * getLargeHeight(){\n\t *     this.large.root.style.display = 'block';\n\t *     this.large.root.style.visibility = 'hidden';\n\t *     this.large.root.style.position = 'absolute';\n\t *     this.large.root.style.top = far away\n\t *     this.large.root.style.left = far away\n\t *     \n\t *     let height = this.large.root.clientHeight;\n\t *     \n\t *     this.large.root.style.display = 'none';\n\t *     this.large.root.style.visibility = '';\n\t *     this.large.root.style.position = original position;\n\t *     this.large.root.style.top = original top\n\t *     this.large.root.style.left = original left\n\t *     \n\t *     return height;\n\t * }\n\t * \n\t * @return {Number} - height of header view in large state\n\t */\n\tgetLargeHeight(){\n\t\treturn Number(window.getComputedStyle(this.large.root).height.replace('px',''));\n\t}\n\t\n\t/** \n\t * Return the height in small state\n\t * \n\t * (same as `getLargeHeight`)\n\t * \n\t * The height of small view should be defined in its root style.\n\t * \n\t * But, if you would like to make dynamically defined header elements, \n\t * you have to calculate your header's height in your implementaion.\n\t * \n\t * @example\n\t * \n\t * getSmallHeight(){\n\t *     this.small.root.style.display = 'block';\n\t *     this.small.root.style.visibility = 'hidden';\n\t *     this.small.root.style.position = 'absolute';\n\t *     this.small.root.style.top = far away\n\t *     this.small.root.style.left = far away\n\t *     \n\t *     let height = this.small.root.clientHeight;\n\t *     \n\t *     this.small.root.style.display = 'none';\n\t *     this.small.root.style.visibility = '';\n\t *     this.small.root.style.position = original position;\n\t *     this.small.root.style.top = original top\n\t *     this.small.root.style.left = original left\n\t *     \n\t *     return height;\n\t * }\n\t * \n\t * @return {Number} - height of header view in small state\n\t */\n\tgetSmallHeight(){\n\t\treturn Number(window.getComputedStyle(this.small.root).height.replace('px',''));\n\t}\n\t\n\t/** \n\t * Threshold of scroll amount to make header sticky\n\t * \n\t * Utility to get sticky threshold scroll amount.\n\t * \n\t * @return {Number} - scroll amount to make header sticky\n\t * @private\n\t */\n\tgetStickyThreshold(){\n\t\treturn this.getLargeHeight() - this.getSmallHeight();\n\t}\n\t\n\t/** \n\t * Handler called when the page scrolled to `sticky height`\n\t * \n\t * By default, when scrolled over `sticky` amount, large view is hidden and small view is shown.\n\t * To change this behavior, or append your behaviour, override this method.\n\t */\n\tonEnterSticky(){\n\t\tthis.large.viewWillDisappear();\n\t\tthis.large_holder.style.display = 'none';\n\t\tthis.large.viewDidDisappear();\n\t\t\n\t\tthis.small.viewWillAppear();\n\t\tthis.small_holder.style.display = 'block';\n\t\tthis.small.viewDidAppear();\n\t}\n\t\n\t/** \n\t * Handler called when the page scroll backed to top area\n\t * \n\t * By default, when scroll back to top area less than `sticky height`, large view is shown and small view is hidden.\n\t * To change this behavior, or append your behaviour, override this method.\n\t */\n\tonExitSticky(){\n\t\tthis.large.viewWillAppear();\n\t\tthis.large_holder.style.display = 'block';\n\t\tthis.large.viewDidAppear();\n\t\t\n\t\tthis.small.viewWillDisappear();\n\t\tthis.small_holder.style.display = 'none';\n\t\tthis.small.viewDidDisappear();\n\t}\n\t\n\t/** \n\t * Handler called when the back button appeared\n\t * \n\t * By default, both large and small view will slide out 44px (defined in `.slide_out` css class).\n\t * To change this behavior, or append your behaviour, override this method.\n\t */\n\tonAppearBackButton(){\n\t\tthis.large_holder.classList.add(\"slide_out\");\n\t\tthis.large_holder.classList.remove(\"slide_in\");\n\t\tthis.small_holder.classList.add(\"slide_out\");\n\t\tthis.small_holder.classList.remove(\"slide_in\");\n\t}\n\t\n\t/** \n\t * Handler called when the back button disappeared\n\t * \n\t * By default, both large and small view will turn back to the original position (defined in `.slide_in` css class).\n\t * To change this behavior, or append your behaviour, override this method.\n\t */\n\tonDisappearBackButton(){\n\t\tthis.large_holder.classList.add(\"slide_in\");\n\t\tthis.large_holder.classList.remove(\"slide_out\");\n\t\tthis.small_holder.classList.add(\"slide_in\");\n\t\tthis.small_holder.classList.remove(\"slide_out\");\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t* { \n\t\t\t\tbox-sizing:border-box;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\tpadding-top: env(safe-area-inset-top);\n\t\t\t\tpadding-left: env(safe-area-inset-left);\n\t\t\t\tpadding-right: env(safe-area-inset-right);\n\t\t\t}\n\t\t\t.root {\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\tposition: relative;\n\t\t\t\toverflow-x: hidden;\n\t\t\t}\n\t\t\t.large {\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.small {\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.slide_out {\n\t\t\t\ttransition: 0.05s;\n\t\t\t\tmargin-left: 44px;\n\t\t\t\twidth: calc( 100vw - 44px );\n\t\t\t}\n\t\t\t.slide_in {\n\t\t\t\ttransition: 0.05s;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\twidth: 100vw;\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\" id=\"root\">\n\t\t\t\t<div id=\"large\" class=\"large\"></div>\n\t\t\t\t<div id=\"small\" class=\"small\"></div>\n\t\t\t</div>\n\t\t`;\n\t}\n\t\n};\n\n\n\n//# sourceURL=webpack://StickyHeaderNavi/./src/Header.js?");

/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * Abstruct Page\n * \n * This class only provides style for sefa-area, and interface for dynamic header for each page.\n * It is highly recommended to make your page as a sub-class of this Page class.\n * \n * @packagename Craft.Widget.StickyHeaderNavi.Page\n * \n * @example\n * \n * class MyPage extends Craft.Widget.StickyHeaderNavi.Page {\n *     constructor(){\n *         super();\n *         this.large_header = new LargeHeader();\n *         this.small_header = new SmallHeader();\n *     }\n *     getHeaderLarge(){\n *        return this.large_header;\n *     }\n *     getHeaderSmall(){\n *        return this.small_header;\n *     }\n *     style(componentId){\n *         return super.style(componentId) + `\n *             .my_contents {\n *                 color: red;\n *             }\n *         `;\n *     }\n *     template(self){\n *         return `\n *             <div class=\"root\">\n *                 <div class=\"my_contents\">I am MyPage.</div>\n *             </div>\n *         `;\n *     }\n * }\n * \n */\nclass Page extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * Return *large* size header object for this page.\n\t * If you return null, viewController will not change header.\n\t * \n\t * @return {Craft.UI.View|Craft.UI.ViewController} - normal size header component\n\t */\n\tgetHeaderLarge(){}\n\t\n\t/**\n\t * Return *small* size header component view for this page.\n\t * If you return null, viewController will not change header.\n\t * \n\t * @return {Craft.UI.View|Craft.UI.ViewController} - small size header component\n\t */\n\tgetHeaderSmall(){}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t* { \n\t\t\t\tbox-sizing:border-box;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\tpadding-left: env(safe-area-inset-left);\n\t\t\t\tpadding-right: env(safe-area-inset-right);\n\t\t\t}\n\t\t`;\n\t}\n};\n\n\n\n//# sourceURL=webpack://StickyHeaderNavi/./src/Page.js?");

/***/ }),

/***/ "./src/ViewController.js":
/*!*******************************!*\
  !*** ./src/ViewController.js ***!
  \*******************************/
/*! exports provided: ViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewController\", function() { return ViewController; });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BackButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackButton.js */ \"./src/BackButton.js\");\n\n\n\n\n\n/** \n * StickyHeaderNavi \n * \n * let viewController = new Craft.Widget.StickyHeaderNavi.ViewController({\n *     header : new MyHeader()\n * });\n * \n * @packagename Craft.Widget.StickyHeaderNavi.ViewController\n */\nclass ViewController extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].DefaultRootViewController {\n\t\n\t/** \n\t * StickyHeaderNavi constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {Object} options.header - Header contents\n\t * @param {Boolean} options.enableSwipeBack - true to enable page back by swipe gesture (default false)\n\t * @param {Craft.UI.View|Craft.UI.ViewController|Craft.Widget.StickyHeaderNavi.Page} options.page - initial page (not work if you call bringup() at start)\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\t\n\t\tthis.packagename = 'Craft.Widget.StickyHeaderNavi.ViewController';\n\t\t\n\t\tthis.stack       = []; // history. NOTE: this is only effective in the standalone mode\n\t\tthis.currentView = ''; // current viewing page component \n\t\tthis.Pages       = {}; // support to access page object by its componentId, and manages metadata\n\t\tthis.parent      = ''; // parent StickyHeaderNavi\n\t\t\n\t\tthis.header      = options.header;\n\t\tthis.backbtn     = options.backbtn;\n\t\tthis.initialPage = options.page; // this.initialPage will be deleted after appended to the this.contents_holder, and moved to this.currentView\n\t\t\n\t\tthis.enableSwipeBack = options.enableSwipeBack;\n\t\t\n\t\t// BackButton and swipeback is only available in the standalone mode.\n\t\tif( !_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].Device.isStandaloneMode() ){\n\t\t\tthis.backbtn = null;\n\t\t\tthis.enableSwipeBack = false;\n\t\t}\n\t}\n\t\n\t/** \n\t * viewDidLoad\n\t * \n\t * setup controlled elements\n\t * \n\t * @override\n\t * @protected\n\t */\n\tviewDidLoad(callback){\n\t\t// component holders\n\t\tthis.back_holder     = this.shadow.getElementById(\"back\");\n\t\tthis.contents_holder = this.shadow.getElementById(\"contents\");\n\t\tthis.header_holder   = this.shadow.getElementById(\"header\");\n\t\tthis.marker          = this.shadow.getElementById(\"marker\");\n\t\t\n\t\tthis.header.setViewController(this);\n\t\tif( !this.header.isViewLoaded ){\n\t\t\tthis.header.loadView();\n\t\t}\n\t\tthis.header.viewWillAppear();\n\t\tthis.header_holder.appendChild(this.header.view);\n\t\tthis.header.viewDidAppear();\n\t\t\n\t\t// setup back button\n\t\tif( this.backbtn ){\n\t\t\tthis.backbtn.setViewController(this);\n\t\t\tif( !this.backbtn.isViewLoaded ){\n\t\t\t\tthis.backbtn.loadView();\n\t\t\t}\n\t\t\tthis.backbtn.viewWillAppear();\n\t\t\tthis.back_holder.appendChild(this.backbtn.view);\n\t\t\tthis.backbtn.viewDidAppear();\n\t\t}\n\t\t\n\t\t// enable swipe right to page back\n\t\tif( this.enableSwipeBack ){\n\t\t\t_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].Gesture.enableSwipe({\n\t\t\t\ttarget : this.contents_holder,\n\t\t\t\tright  : (event) => { this.back(); }\n\t\t\t});\n\t\t}\n\t\t\n\t\t// fire ContentTapped event occured on the `contents` (DefaultViewController does on this.view)\n\t\t_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].Gesture.enableTap({\n\t\t\ttarget : this.contents_holder,\n\t\t\ttap    : (event) => { _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].NotificationCenter.notify('ContentTapped',event); }\n\t\t});\n\t\t\n\t\t// open initial page if defined\n\t\tif( this.initialPage ){\n\t\t\tthis.open(this.initialPage);\n\t\t}\n\t\t\n\t\tif( callback ){ callback() }\n\t}\n\t\n\t/** \n\t * viewDidAppear\n\t * \n\t * initial setup of sticky handler\n\t * \n\t * @override\n\t * @protected\n\t */\n\tviewDidAppear(){\n\t\tthis.updateStickyHandler();\n\t}\n\t\n\t/** \n\t * update sticky handler\n\t * \n\t * this should be automatically called when you update header content\n\t * \n\t * @protected\n\t */\n\tupdateStickyHandler(){\n\t\tlet header_large_height = this.header.getLargeHeight(); // original height\n\t\tlet threshold = this.header.getStickyThreshold();\n\t\t\n\t\tthis.marker.style[\"top\"] = threshold + 'px';\n\t\t\n\t\tthis.observer = new IntersectionObserver((entries, observer) => {\n\t\t\tif( entries[0].isIntersecting ){\n\t\t\t\tthis.header_holder.classList.remove(\"header_sticky\");\n\t\t\t\tthis.contents_holder.style[\"margin-top\"] = '0px';\n\t\t\t\tthis.back_holder.style[\"margin-top\"] = '0px';\n\t\t\t\tthis.header.onExitSticky();\n\t\t\t\tthis.contents_holder.classList.remove('contents_safe_shift');\n\t\t\t}else{\n\t\t\t\tthis.header_holder.classList.add(\"header_sticky\");\n\t\t\t\tthis.contents_holder.style[\"margin-top\"] = `${header_large_height}px`;\n\t\t\t\tthis.back_holder.style[\"margin-top\"] = `-${header_large_height}px`;\n\t\t\t\tthis.header.onEnterSticky();\n\t\t\t\tthis.contents_holder.classList.add('contents_safe_shift');\n\t\t\t}\n\t\t});\n\t\tthis.observer.observe(this.marker);\n\t}\n\t\n\t// *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    * \n\t\n\t/** \n\t * Open a page\n\t * \n\t * @param {Object} options - options\n\t * @param {Craft.Core.Component} options.page - page component\n\t * @param {Function} options.callback - callback\n\t * @param {Craft.Core.Route} options.route - Route object\n\t */\n\topen(options){\n\t\tlet page     = options.page;\n\t\tlet callback = options.callback;\n\t\tlet route    = options.route;\n\t\t\n\t\tlet event  = route ? route.event  : null;  // event is defined if open is called by browser back/forward with popstate event\n\t\tlet launch = route ? route.launch : false; // true if called from RootViewController#bringup\n\t\t\n\t\tlet disappearingView = this.currentView;\n\t\tlet appearingView    = page;\n\t\t\n\t\tappearingView.setViewController(this);\n\t\t\n\t\tif( !appearingView.isViewLoaded ){\n\t\t\tappearingView.loadView();\n\t\t}\n\t\t\n\t\tif( disappearingView ){\n\t\t\tdisappearingView.viewWillDisappear();\n\t\t}\n\t\t\n\t\tappearingView.viewWillAppear( () => {\n\t\t\tthis.Pages[appearingView.componentId] = { page: appearingView };\n\t\t\t\n\t\t\tthis.stack.push(appearingView);\n\t\t\tthis.contents_holder.appendChild(appearingView.view);\n\t\t\t\n\t\t\tappearingView.show();\n\t\t\tappearingView.viewDidAppear();\n\t\t\t\n\t\t\tthis.currentView = appearingView;\n\t\t\t\n\t\t\tif( disappearingView ){\n\t\t\t\tdisappearingView.viewDidDisappear();\n\t\t\t\tdisappearingView.view.remove();\n\t\t\t}\n\t\t\t\n\t\t\tif( launch ){\n\t\t\t\t// launching the app\n\t\t\t\twindow.history.replaceState(\n\t\t\t\t\t{ componentId:this.currentView.componentId, timestamp:Date.now() },\n\t\t\t\t\tthis.currentView.title,\n\t\t\t\t\tthis.currentView.path\n\t\t\t\t);\n\t\t\t}else{\n\t\t\t\tif( !event ){\n\t\t\t\t\t// in app navigation\n\t\t\t\t\twindow.history.pushState(\n\t\t\t\t\t\t{ componentId:this.currentView.componentId, timestamp:Date.now() },\n\t\t\t\t\t\tthis.currentView.title,\n\t\t\t\t\t\tthis.currentView.path\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tif( this.currentView.title ){\n\t\t\t\tdocument.title = this.currentView.title;\n\t\t\t}\n\t\t\t\n\t\t\tif( window.pageYOffset > this.header.getStickyThreshold() ){\n\t\t\t\twindow.scrollTo(0,this.header.getStickyThreshold()+1);\n\t\t\t\tthis.contents_holder.classList.add('contents_safe_shift');\n\t\t\t}else{\n\t\t\t\tthis.contents_holder.classList.remove('contents_safe_shift');\n\t\t\t}\n\t\t\t\n\t\t\tif( this.backbtn ){\n\t\t\t\tif( this.stack.length > 1 ){\n\t\t\t\t\tthis.backbtn.view.style['display'] = 'block';\n\t\t\t\t\tthis.header.onAppearBackButton();\n\t\t\t\t}else{\n\t\t\t\t\tthis.backbtn.view.style['display'] = 'none';\n\t\t\t\t\tthis.header.onDisappearBackButton();\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tif( callback ){ callback(); }\n\t\t});\n\t}\n\t\n\t/** \n\t * Page back (for standalone mode)\n\t * \n\t * @param {Function} callback - callback\n\t */\n\tback(callback){\n\t\tif( this.stack.length <= 1 ){\n\t\t\t// no more history\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tlet index = this.stack.length - 1;\n\t\tif( index < 1 ){ index = 1; }\n\t\t\n\t\tlet disappearingViews = this.stack.splice(index);\n\t\tlet disappearingView  = this.currentView;\n\t\tlet appearingView     = this.stack[this.stack.length-1];\n\t\t\n\t\tfor( let i=0; i<disappearingViews.length; i++ ){\n\t\t\tdisappearingViews[i].viewWillDisappear();\n\t\t}\n\t\t\n\t\tappearingView.viewWillAppear( () => {\n\t\t\tthis.contents_holder.appendChild(appearingView.view);\n\t\t\tappearingView.show();\n\t\t\tappearingView.viewDidAppear();\n\t\t\t\n\t\t\tthis.currentView = appearingView;\n\t\t\t\n\t\t\tif( appearingView.path ){\n\t\t\t\twindow.history.pushState(\n\t\t\t\t\t{ componentId:this.currentView.componentId, timestamp:Date.now() },\n\t\t\t\t\tthis.currentView.title,\n\t\t\t\t\tthis.currentView.path\n\t\t\t\t);\n\t\t\t}\n\t\t\t\n\t\t\tif( this.currentView.title ){\n\t\t\t\tdocument.title = this.currentView.title;\n\t\t\t}\n\t\t\t\n\t\t\tif( this.backbtn && (this.stack.length === 1) ){\n\t\t\t\tthis.backbtn.view.style['display'] = 'none';\n\t\t\t\tthis.header.onDisappearBackButton();\n\t\t\t}\n\t\t\t\n\t\t\tdelete this.Pages[disappearingView.componentId];\n\t\t\tdisappearingView.viewDidDisappear();\n\t\t\tdisappearingView.view.remove();\n\t\t\t\n\t\t\tif( callback ){ callback(); }\n\t\t});\n\t}\n\t\n\t// *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    * \n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t* { \n\t\t\t\tbox-sizing:border-box;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\twidth: 100vw;\n\t\t\t\tmargin: 0px;\n\t\t\t\tpadding: 0px;\n\t\t\t}\n\t\t\t.root {\n\t\t\t\twidth: 100vw;\n\t\t\t}\n\t\t\t.back {\n\t\t\t\tposition: fixed;\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tz-index: 9999;\n\t\t\t}\n\t\t\t.header {\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.header_sticky {\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t.marker {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0px;\n\t\t\t\twidth: 1px;\n\t\t\t\theight: 1px;\n\t\t\t\tmargin-top: -1px;\n\t\t\t}\n\t\t\t.contents {\n\t\t\t}\n\t\t\t.contents_safe_shift {\n\t\t\t\tpadding-top: env(safe-area-inset-top);\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div id=\"root\" class=\"root\">\n\t\t\t\t<div class=\"back\" id=\"back\"></div>\n\t\t\t\t<div class=\"header\" id=\"header\"></div>\n\t\t\t\t<div class=\"marker\" id=\"marker\"></div>\n\t\t\t\t<div class=\"cotents\" id=\"contents\"></div>\n\t\t\t</div>\n\t\t`;\n\t}\n\t\n};\n\n\n\n//# sourceURL=webpack://StickyHeaderNavi/./src/ViewController.js?");

/***/ }),

/***/ "@craftkit/craft-uikit":
/*!************************!*\
  !*** external "Craft" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__craftkit_craft_uikit__;\n\n//# sourceURL=webpack://StickyHeaderNavi/external_%22Craft%22?");

/***/ })

/******/ });
});