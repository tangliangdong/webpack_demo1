webpackJsonp([1],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_html__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mustache__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Button_scss__);
var $ = __webpack_require__(2);




class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        alert(this.link);
    }

    render(node) {
        const text = $(node).text();

        // 渲染按钮
        $(node).html(
            __WEBPACK_IMPORTED_MODULE_1_mustache___default.a.render(__WEBPACK_IMPORTED_MODULE_0__Button_html___default.a, { text })
        );

        // 绑定事件
        $('.button1').click(this.onClick.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Button;


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = "<button class=\"button1\">你好世界</button>";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Button.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Button.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".button1 {\n  background: tomato;\n  color: white; }\n", ""]);

// exports


/***/ })

});