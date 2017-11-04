'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styles = require('../static/css/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _styles2.default } }), _react2.default.createElement('div', { className: 'work-container' }, _react2.default.createElement('p', { className: 'work-title' }, 'Selected works'), _react2.default.createElement('main', null, _react2.default.createElement('div', { className: 'top' }, _react2.default.createElement('div', { className: 'project1' }, _react2.default.createElement('a', { href: 'https://akafred.com' }, _react2.default.createElement('span', { className: 'project-title' }, 'Akafred.com'), _react2.default.createElement('br', null), _react2.default.createElement('span', { className: 'project-description' }, 'A jekyll-based blog'))), _react2.default.createElement('div', { className: 'project2' }, _react2.default.createElement('a', { href: 'https://achievecare.ca' }, _react2.default.createElement('span', { className: 'project-title' }, 'Achievecare.ca'), _react2.default.createElement('br', null), _react2.default.createElement('span', { className: 'project-description' }, 'A daycare website')))), _react2.default.createElement('div', { className: 'bottom' }, _react2.default.createElement('div', { className: 'project3' }, _react2.default.createElement('a', { href: 'https://codepen.io/camillesalvador/full/WojRvr/' }, _react2.default.createElement('span', { className: 'project-title' }, 'Local Weather Viewer'), _react2.default.createElement('br', null), _react2.default.createElement('span', { className: 'project-description' }, 'An API project'))), _react2.default.createElement('div', { className: 'project4' }, _react2.default.createElement('a', { href: 'https://camillesalvador.github.io/foodResto/' }, _react2.default.createElement('span', { className: 'project-title' }, 'Gratia'), _react2.default.createElement('br', null), _react2.default.createElement('span', { className: 'project-description' }, 'A NextJS website'))))), _react2.default.createElement('div', { className: 'more' }, _react2.default.createElement('a', { href: 'https://github.com/camillesalvador' }, 'Click here to see more'))));
};