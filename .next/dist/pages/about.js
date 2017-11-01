'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styles = require('../static/css/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _styles2.default } }), _react2.default.createElement('div', { className: 'about-container' }, _react2.default.createElement('main', null, _react2.default.createElement('div', { className: 'description' }, _react2.default.createElement('div', { className: 'about-title' }, _react2.default.createElement('p', null, 'About Me')), _react2.default.createElement('p', null, 'Hi, I\u2019m Camille Salvador. I\u2019m a 21-year old with a Back-End Development training who once fell (and may still have lingering feelings) for Java and RDBMS but is currently pursuing Front-End Development instead.', _react2.default.createElement('br', null), '  ', _react2.default.createElement('br', null), 'I enjoy wandering around and getting lost in books, movies, and story rich RPG games. And I occasionally get lost in K-dramas which led me into studying Korean Language on my spare time. \uC548\uB155\uD558\uC138\uC694~'), _react2.default.createElement('hr', null))), _react2.default.createElement('div', { className: 'social' }, _react2.default.createElement('p', { className: 'social-title' }, 'Say hi!'), _react2.default.createElement('div', { className: 'social-icons' }, _react2.default.createElement('a', { href: 'https://github.com/camillesalvador' }, _react2.default.createElement(_reactFontawesome2.default, { name: 'github fa-3x' })), _react2.default.createElement('a', { href: 'https://codepen.io/camillesalvador' }, _react2.default.createElement(_reactFontawesome2.default, { name: 'codepen fa-3x' })), _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/camillesalvador/' }, _react2.default.createElement(_reactFontawesome2.default, { name: 'linkedin fa-3x' }))))));
};