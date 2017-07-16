webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mustache__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mustache__);

__webpack_require__(5);
__webpack_require__(11);
__webpack_require__(13);


__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function() {
    fullscreen.init();
});

if (document.querySelectorAll('a').length) {
    __webpack_require__.e/* require.ensure */(1).then((() => {
        const Button = __webpack_require__(22);
        const button = new Button('google.com');

        button.render('a');
    }).bind(null, __webpack_require__)).catch(() => {});
}
// 如果有 h1 标签，渲染页眉
if (document.querySelectorAll('h1').length) {
    __webpack_require__.e/* require.ensure */(0).then((() => {
        const Header = __webpack_require__(23);

        new Header().render('h1');
    }).bind(null, __webpack_require__)).catch(() => {});
}

// 左侧图片一段时间后消失
var fadeOutImg = function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.changeImg').animate({ 'opacity': 0 }, 500, function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('display', 'none');
        });

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.changediv .mark').addClass('fadeOutDown').removeClass('fadeInUp');
    }
    //page2 字体掉落效果
var wordfall = function(wordIndex) {
    var words = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.changediv em');
    words.eq(wordIndex).css('opacity', '1');
    words.eq(wordIndex).addClass('animated worddown');
    wordIndex++;
    if (wordIndex < words.length) {
        setTimeout(function() {
            wordfall(wordIndex);
        }, 300);
    }
}

var fullscreen = (function() {
    var $items = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main .main_ul .pages'),
        $itemcounts = $items.length,

        $navNext = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.navNext'),
        $navPrev = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.navPrev'),

        current = 0,
        slideShowTime = 500,
        isHover = false,

        newImg,
        changeImg = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page2 .changediv .changeImg'),
        hasOldImg = false,
        oldImg,
        imgTimeout,
        wordIndex = 0,
        mark = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.changediv .mark');
    // 初始化方法
    function init(config) {
        initAnimate();
        initEvent();
        imgWall();
    }

    function imgWall() {
        var images = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.beta_do img');

        images.hover(function() {
            isHover = true;
            newImg = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
            clearTimeout(imgTimeout);
            // 不是第一次hover，且这次hover的图片和前一次不同
            if (hasOldImg && (oldImg == undefined || newImg.attr('src') !== oldImg.attr('src'))) {
                changeImg.animate({
                        'opacity': 0,
                    },
                    500,
                    function() {
                        changeBigImg();
                    });
                // 第一次hover
            } else if (!hasOldImg) {
                hasOldImg = true;
                changeImg.animate({
                        'opacity': 0,
                    },
                    500,
                    function() {
                        changeBigImg();
                    });
                // 在同一张图片上hover
            } else {
                changeBigImg();
            }
            oldImg = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
        }, function() {
            clearTimeout(imgTimeout);
            imgTimeout = setTimeout(function() {
                fadeOutImg()
            }, 3000);
        });

        // 更换page2右侧大图片以及下方说明文字
        function changeBigImg() {
            changeImg.attr({ "src": newImg.attr("src") });
            changeImg.css({ "display": 'block' });
            changeImg.animate({
                    'opacity': 1,
                },
                500,
                function() {});
            // 增加图片下方的说明文字
            mark.text(newImg.attr('data'));
            mark.addClass('animated fadeInUp');
            mark.removeClass('fadeOutDown');
        }
    }
    // page2页面初始动画
    function initAnimate() {
        var title = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.betahouse_name'),
            logo = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.logo'),
            $links = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.chaining'),
            $about = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.about_us'),
            navLink = {
                zhizhi: $links.children('li').eq(0),
                recruit: $links.children('li').eq(1),
                about: $about.children('li').eq(0),
                email: $about.children('li').eq(1)
            }

        title.addClass('animated zoomInDown');
        $navNext.addClass('animated fadeInRight');
        $navPrev.addClass('animated fadeInLeft');
        logo.addClass('animated zoomIn');
        setTimeout(function() {
            navLink.zhizhi.addClass('animated bounceInLeft');
            navLink.recruit.addClass('animated bounceInLeft');
            navLink.about.addClass('animated bounceInRight');
            navLink.email.addClass('animated bounceInRight');
        }, 600);

    }
    // page2绑定事件
    function initEvent() {
        $navPrev.on('click', function(event) {
            navigate('prev');
        });
        $navNext.on('click', function(event) {
            navigate('next');
        });
    }
    // 切换屏幕内容
    function navigate(describe) {
        var $oldItem = $items.eq(current),
            img_li = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page2 .beta_do li'),
            words = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.changediv em'),
            wordlength = words.length;
        switch (describe) {
            case 'prev':
                current = current == 0 ? current = $itemcounts - 1 : --current;
                break;
            case 'next':
                current = current == $itemcounts - 1 ? current = 0 : ++current;
                break;
        }
        var $newItem = $items.eq(current);
        $oldItem.css({
            'opacity': 0,
            'z-index': -1
        });
        $newItem.css({
            'opacity': 1,
            'z-index': 2
        });
        changeImg.animate({ 'opacity': 0 }, 500, function() {
            changeImg.css('display', 'none');
        });
        if (current === 1) {
            img_li.addClass('animated bounceInRight');
            wordfall(wordIndex);
        }
    }
    return { init: init };

})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "body\n{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n}\na\n{\n    text-decoration: none;\n}\n\n.content .main\n{\n    overflow: hidden;\n}\n.content .main .main_ul .pages\n{\n    position: absolute;\n\n    display: block;\n    overflow: hidden;\n\n    width: 100%;\n    height: 100%;\n\n    -webkit-transition: 1s;\n         -o-transition: 1s;\n            transition: 1s;\n\n    -webkit-background-size: cover;\n            background-size: cover;\n}\n/*第一个页面*/\n.content .main .main_ul .page1\n{\n    z-index: 11;\n\n    background: url(" + __webpack_require__(7) + ");\n    background-size: cover;\n}\n\n.content .main .logo\n{\n    position: relative;\n    top: 25%;\n\n    display: block;\n\n    width: 80px;\n    margin: 0 auto;\n    /*-webkit-transform: translate(-50%,-50%);\n        -ms-transform: translate(-50%,-50%);\n         -o-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);*/\n}\n.content .main .betahouse_name\n{\n    font-family: Georgia, 'Times New Roman',\n    'Microsoft YaHei', '\\5FAE\\8F6F\\96C5\\9ED1',\n    STXihei, '\\534E\\6587\\7EC6\\9ED1',\n    serif;\n    font-size: 2.2em;\n\n    position: relative;\n    top: 34%;\n\n    margin: 0 auto;\n\n    text-align: center;\n    /* \n    -webkit-transform: translate(-50%,-50%);\n        -ms-transform: translate(-50%,-50%);\n         -o-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%); */\n    letter-spacing: .4em;\n\n    color: #fff;\n    text-shadow: 2px 3px 1px #000;\n}\n\n\n/*第二个页面*/\n.content .main .main_ul .page2\n{\n    z-index: 1;\n\n    opacity: 0;\n    background: url(" + __webpack_require__(8) + ") no-repeat;\n    -webkit-background-size: cover;\n            background-size: cover;\n}\n.page2 .beta_do\n{\n    position: absolute;\n    z-index: 10;\n    top: 13%;\n    right: 18%;\n\n    width: 200px;\n    height: 900px;\n\n    transform: translateX(50%);\n}\n\n\n.page2 .beta_do li\n{\n    display: block;\n    float: left;\n    overflow: hidden;\n\n    width: 140px;\n    height: 140px;\n    margin: 5px 0;\n\n    transition: 1s box-shadow ease;\n\n    border: 2px outset #f00;\n    border-radius: .2em;\n}\n.page2 .beta_do li:hover\n{\n    box-shadow: 0 0 20px #eee;\n}\n.page2 .beta_do img\n{\n    width: 140px;\n    height: 140px;\n}\n.page2 .changediv\n{\n    position: absolute;\n    top: 15%;\n    left: 40%;\n\n    width: 500px;\n    height: 520px;\n\n    transform: translateX(-50%);\n}\n.page2 .changediv .changeImg\n{\n    position: relative;\n    z-index: 3;\n\n    display: none;\n\n    width: 500px;\n    height: 520px;\n\n    opacity: 0;\n    border: none;\n}\n.page2 .changediv .mark\n{\n    font-size: 1.4rem;\n    font-weight: bold;\n\n    position: absolute;\n    top: 106%;\n    left: 50%;\n\n    display: block;\n\n    padding: 6px 16px;\n\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n         -o-transform: translateX(-50%);\n            transform: translateX(-50%);\n\n    opacity: 0;\n    color: #ff0;\n    border: 2px outset #f00;\n    border-radius: 4px;\n}\n\n.page2 .changediv p\n{\n    font-size: 3em;\n    line-height: 2em;\n\n    position: absolute;\n    z-index: 2;\n    top: 20%;\n    left: 10%;\n\n    display: block;\n\n    letter-spacing: .2em;\n\n    color: #fff;\n}\n.page2 .changediv p em\n{\n    display: inline-block;\n\n    margin: 0 -14px;\n\n    text-shadow: 2px 2px 1px #22231F;\n\n    opacity: 0;\n}\n\n\n\n/*第三个页面*/\n.content .main .main_ul .page3\n{\n    z-index: -1;\n\n    background: url(" + __webpack_require__(9) + ") no-repeat;\n\n    opacity: 0;\n    -webkit-background-size: cover;\n            background-size: cover;\n    overflow: hidden;\n    height: 100%;\n}\n.page3{\n    position: relative;\n}\n.page3 .computer{\n    /*background: url('../img/computer.png') no-repeat;*/\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translate(-50%);\n    -ms-transform: translate(-50%);\n    -o-transform: translate(-50%);\n    transform: translate(-50%);\n}\n.page3 .computer img{\n    max-width: 700px;\n    height: auto;\n    margin: 0 auto;\n\n}\n.page3 .computer .beta_video{\n    position: absolute;\n    top: 4%;\n    left: 12%;\n    margin: 0 auto;\n    width: 76%;\n}\n.page3 a{\n    font-size: 2rem;\n    letter-spacing: .6rem;\n    position: relative;\n    top: 75%;\n    display: block;\n    margin: 0 auto;\n    width: auto;\n    text-align: center;\n    color: #F1F1EF;\n    font-weight: bolder;\n    transition: 1s ease;\n    width: 75%;\n}\n.page3 a:hover{\n    transform: scale(1.2);\n    border-bottom: 1px solid #F1F1EF;\n}\n\n\n/*按钮样式*/\n.content .main .control\n{\n    position: fixed;\n    z-index: 100;\n    top: 50%;\n\n    width: 100%;\n    width: 40px;\n    height: 100px;\n    height: 40px;\n\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n         -o-transform: translateY(-50%);\n            transform: translateY(-50%);\n\n    border: 4px solid #c12d1c;\n    border-radius: 2px;\n    background: transparent;\n}\n.content .main .navPrev\n{\n    left: 2%;\n\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n         -o-transform: rotate(45deg);\n            transform: rotate(45deg);\n\n    border-top-color: transparent;\n    border-right-color: transparent;\n}\n\n.content .main .navNext\n{\n    right: 2%;\n\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n         -o-transform: rotate(45deg);\n            transform: rotate(45deg);\n\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n}\n.content .main .navNext:hover\n{\n    border-color: #f0382f #f0382f transparent transparent;\n}\n\n.content .main .navPrev:hover\n{\n    border-color: transparent transparent #f0382f #f0382f ;\n}\n\n/*链接样式*/\n.content .main .chaining\n{\n    position: absolute;\n    z-index: 100;\n    top: 5%;\n    left: 6%;\n\n    width: 200px;\n    height: 30px;\n}\n\n.content .main .chaining li\n{\n    font-size: .8em;\n    line-height: 20px;\n\n    float: left;\n\n    margin: 0 3%;\n\n    -webkit-transform: translate3d(-3000px, 0, 0);\n            transform: translate3d(-3000px, 0, 0);\n    letter-spacing: .4em;\n}\n\n.content .main .chaining li a\n{\n    display: block;\n\n    width: 50px;\n\n    text-align: center;\n\n    color: #fff;\n}\n\n\n.content .main .chaining li a:hover\n{\n    text-decoration: none;\n\n    border-bottom: 1px solid #fff;\n}\n.content .main .about_us\n{\n    position: fixed;\n    z-index: 100;\n    top: 5%;\n    right: 6%;\n\n    width: 300px;\n    height: 40px;\n\n    transform: translate(50%);\n}\n\n.content .main .about_us li\n{\n    float: left;\n\n    margin: 0 2%;\n\n    -webkit-transform: translate3d(3000px, 0, 0);\n            transform: translate3d(3000px, 0, 0);\n}\n\n.content .main .about_us li a\n{\n    font-size: .8em;\n    line-height: 20px;\n\n    display: block;\n\n    width: 70px;\n\n    text-align: center;\n    letter-spacing: .3em;\n\n    color: #fff;\n}\n.content .main .about_us li a:hover\n{\n    text-decoration: none;\n\n    border-bottom: 1px solid #fff;\n}\n\n\n\n\n@media screen and (max-width: 1100px)\n{\n    .page2 .changediv\n    {\n        left: 24%;\n\n        transform: translate(-30%);\n    }\n}\n\n@media screen and (max-width: 900px)\n{\n    .page2 .beta_do\n    {\n        position: absolute;\n        z-index: 10;\n        top: 25%;\n        right: 15%;\n\n        width: 80px;\n        height: 400px;\n\n        transform: translateX(50%);\n    }\n    .page2 .beta_do li\n    {\n        display: block;\n        float: left;\n        overflow: hidden;\n\n        width: 70px;\n        height: 70px;\n        margin: 5px 0;\n\n        transition: 1s box-shadow ease;\n\n        border: 1px outset #f00;\n        border-radius: .2em;\n    }\n    .page2 .beta_do li:hover\n    {\n        box-shadow: 0 0 10px #eee;\n    }\n    .page2 .beta_do img\n    {\n        width: 70px;\n        height: 70px;\n    }\n    .page2 .changediv\n    {\n        left: 28%;\n\n        transform: translate(-30%);\n    }\n}\n@media screen and (max-width: 700px)\n{\n    .main .page1 .betahouse_name\n    {\n        font-size: 1.5rem;\n\n        top: 44%;\n    }\n    .main .page1 .logo\n    {\n        top: 30%;\n\n        width: 60px;\n    }\n    .page2 .changediv p em\n    {\n        font-size: 1.4rem;\n\n        letter-spacing: .4em;\n    }\n    .page2 .changediv p\n    {\n        font-weight: bolder;\n        line-height: 40px;\n\n        left: 20%;\n    }\n    .page2 .changediv\n    {\n        position: absolute;\n        top: 15%;\n        left: 50%;\n\n        width: 90%;\n\n        transform: translateX(-50%);\n    }\n    .page2 .beta_do\n    {\n        position: absolute;\n        z-index: 10;\n        top: 75%;\n        left: 50%;\n\n        width: 256px;\n        height: 80px;\n\n        transform: translateX(-50%);\n    }\n\n    .page2 .beta_do li\n    {\n        display: block;\n        float: left;\n        overflow: hidden;\n\n        width: 50px;\n        height: 50px;\n        margin: 0 5px;\n\n        transition: 1s box-shadow ease;\n\n        border: 2px outset #f00;\n        border-radius: 2px;\n    }\n    .page2 .beta_do img\n    {\n        width: 50px;\n        height: 50px;\n    }\n    .page2 .changediv .changeImg\n    {\n        position: relative;\n        z-index: 3;\n\n        display: none;\n\n        width: 100%;\n        max-width: 500px;\n        height: auto;\n        margin: 0 auto;\n\n        opacity: 0;\n        border: none;\n    }\n    .page3 .computer img{\n        max-width: 600px;\n        height: auto;\n\n    }\n    .page3 a{\n        font-size: 1.6rem;\n        letter-spacing: .4rem;\n        top: 70%;\n    }\n}\n@media screen and (max-width: 500px)\n{\n    .page2 .changediv .mark\n    {\n        top: 96%;\n    }\n     .page3 .computer img{\n        max-width: 500px;\n        width: 100%;\n        height: auto;\n\n    }\n    .page3 .computer {\n        width: 100%;\n        top: 20%;\n    }\n    \n    /*.page3 .computer .beta_video{\n        top: 2%;\n        left: 10%\n        width: 80%;\n    }*/\n    .page3 a{\n        font-size: 1.1rem;\n        letter-spacing: .3rem;\n        top: 70%;\n        width: 80%;\n        min-width: 280px;\n    }\n\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/index-9d054f.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/page2-546447.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ChMlWVXC-kyIWWE9AAOTs9bfQYoAAITugICjZoAA5PL219-eb107c.png";

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!./reset.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./reset.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!./animation.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./animation.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate(45deg);\n    transform: translate3d(100%, 0, 0) rotate(45deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    \n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate(45deg);\n    transform: translate3d(100%, 0, 0) rotate(45deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n    transform: translate3d(0, 0, 0) rotate(45deg);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    transform: rotate(45deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n    transform: rotate(45deg);\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate(45deg);\n    transform: translate3d(-100%, 0, 0) rotate(45deg);\n    \n  }\n\n  to {\n    opacity: 1;\n     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n    transform: translate3d(0, 0, 0) rotate(45deg);\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, 100%, 0);\n    transform: translate3d(-50%, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, 100%, 0);\n    transform: translate3d(-50%, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, 100%, 0);\n    transform: translate3d(-50%, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n\n/*DIY*/\n.worddown{\n    -webkit-animation-name: wordDown;\n    -o-animation-name: wordDown;\n    animation-name: wordDown;\n    -webkit-animation-duration: 2s;\n    -o-animation-duration: 2s;\n    animation-duration: 2s;\n}\n\n@keyframes wordDown{\n    0%{\n        transform:translateY(-500px) rotate(-35deg); \n    }\n    30%{\n        transform: translateY(0) rotate(-10deg); \n    }\n    40%{\n        transform: translateY(-3px) rotate(13deg);\n    }\n    50%{\n        transform: translateY(0px) rotate(0deg);\n    }\n    /*to {\n       transform: translateY(-50%);\n    }*/\n}", ""]);

// exports


/***/ })
],[4]);