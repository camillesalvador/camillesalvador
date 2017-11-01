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

var _MobileNav = require('./MobileNav');

var _MobileNav2 = _interopRequireDefault(_MobileNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement('nav', { className: 'navbar' }, _react2.default.createElement('div', { className: 'nav-logo' }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'cs.'))), _react2.default.createElement(_MobileNav2.default, { className: 'menu-wrapper' }, _react2.default.createElement('div', { className: 'menu' }, _react2.default.createElement('div', { className: 'menu-btn' }, _react2.default.createElement(_reactFontawesome2.default, { name: 'circle' }), _react2.default.createElement(_reactFontawesome2.default, { name: 'circle' }), _react2.default.createElement(_reactFontawesome2.default, { name: 'circle' })), _react2.default.createElement('div', { className: 'nav-links' }, _react2.default.createElement(_link2.default, { href: 'out/' }, _react2.default.createElement('a', null, 'Home')), _react2.default.createElement(_link2.default, { href: '/out/about' }, _react2.default.createElement('a', null, 'About me')), _react2.default.createElement(_link2.default, { href: 'out/works' }, _react2.default.createElement('a', null, 'Selected Works')), _react2.default.createElement(_link2.default, { href: 'out/about' }, _react2.default.createElement('a', null, 'Reach me'))))));
};