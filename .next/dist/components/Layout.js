'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }), _react2.default.createElement('meta', { name: 'description', content: 'Camille Salvador is a Web Developer from Calgary, Alberta Canada.' }), _react2.default.createElement('title', null, 'Camille Salvador'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' })), _react2.default.createElement(_Nav2.default, null), props.children, _react2.default.createElement(_Footer2.default, null));
};

exports.default = Layout;