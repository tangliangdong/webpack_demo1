var $ = require('jquery');
import template from './Button.html';
import Mustache from 'mustache';
import './Button.scss';

export default class Button {
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
            Mustache.render(template, { text })
        );

        // 绑定事件
        $('.button1').click(this.onClick.bind(this));
    }
}