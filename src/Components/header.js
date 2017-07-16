var $ = require('jquery');
import Mustache from 'mustache';
import template from './header.html';
import './header.scss';

export default class header {
    render(node) {
        const text = $(node).text();

        $(node).html(
            Mustache.render(template, { text })
        );
    }
}