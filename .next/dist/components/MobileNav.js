"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/camille/Sites/camillesalvador/components/MobileNav.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "handleClick",
    value: function handleClick() {
      var button = this.button.children;

      var _loop = function _loop(i) {
        var a = button[i];
        a.onclick = function () {
          return a.classList.toggle("active");
        };
      };

      for (var i = 0; i < button.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", { ref: function ref(a) {
          return _this2.button = a;
        },
        onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.props.children);
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW9iaWxlTmF2LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYnV0dG9uIiwiY2hpbGRyZW4iLCJpIiwiYSIsIm9uY2xpY2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsZW5ndGgiLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7O2tDQUdMOztvQkFBYzt3Q0FBQTs7Z0lBRVo7O1VBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBRnhCLEFBRVo7V0FDRDs7Ozs7a0NBRWEsQUFDWjtVQUFNLFNBQVMsS0FBQSxBQUFLLE9BRFIsQUFDWixBQUEyQjs7aUNBRGYsQUFFSCxHQUNQO1lBQUksSUFBSSxPQUFSLEFBQVEsQUFBTyxBQUNmO1VBQUEsQUFBRSxVQUFVLFlBQUE7aUJBQU0sRUFBQSxBQUFFLFVBQUYsQUFBWSxPQUFsQixBQUFNLEFBQW1CO0FBSjNCLEFBSVY7QUFGRjs7V0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksT0FBcEIsQUFBMkIsUUFBM0IsQUFBbUMsS0FBSztjQUEvQixBQUErQixBQUd2QztBQUNGOzs7OzZCQUVRO21CQUNQOzs2QkFDRSxjQUFBLFNBQUssS0FBSyxnQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBVixBQUFtQjtBQUE3QixBQUNBO2lCQUFTLEtBRFQsQUFDYztvQkFEZDtzQkFBQSxBQUVDO0FBRkQ7T0FBQSxPQUVDLEFBQUssTUFIUixBQUNFLEFBRVksQUFHZjs7Ozs7RUFyQjBCLGdCQUFNLEEiLCJmaWxlIjoiTW9iaWxlTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jYW1pbGxlL1NpdGVzL2NhbWlsbGVzYWx2YWRvciJ9