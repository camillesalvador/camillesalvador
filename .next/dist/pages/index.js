'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styles = require('../static/css/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _styles2.default } }), _react2.default.createElement('div', { className: 'hero-head zoomIn' }, _react2.default.createElement('div', { className: 'hero-img fadeInUp animated' }), _react2.default.createElement('div', { className: 'description fadeInUp animated' }, _react2.default.createElement('p', null, 'a web developer', _react2.default.createElement('br', null), 'and a part-time witcher'), _react2.default.createElement(_link2.default, { className: 'see-work-btn', href: '/works' }, _react2.default.createElement('a', null, 'check out my work')))));
};