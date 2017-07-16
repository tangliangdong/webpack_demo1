webpackJsonp([0],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mustache__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__header_scss__);
var $ = __webpack_require__(2);




class header {
    render(node) {
        const text = $(node).text();

        $(node).html(
            __WEBPACK_IMPORTED_MODULE_0_mustache___default.a.render(__WEBPACK_IMPORTED_MODULE_1__header_html___default.a, { text })
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = header;


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = "";

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./header.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".header {\n  font-size: 3rem; }\n", ""]);

// exports


/***/ })

});