'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('vtex-tachyons/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Success = function (_PureComponent) {
  _inherits(Success, _PureComponent);

  function Success() {
    _classCallCheck(this, Success);

    return _possibleConstructorReturn(this, (Success.__proto__ || Object.getPrototypeOf(Success)).apply(this, arguments));
  }

  _createClass(Success, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size;

      return _react2.default.createElement(
        'svg',
        {
          className: 'vtex-icon__success',
          viewBox: '0 0 14 14',
          xmlns: 'http://www.w3.org/2000/svg',
          width: size,
          height: size
        },
        _react2.default.createElement(
          'g',
          { fill: color },
          _react2.default.createElement('path', {
            d: 'M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12.25A5.255 5.255 0 0 1 1.75 7 5.255 5.255 0 0 1 7 1.75 5.255 5.255 0 0 1 12.25 7 5.255 5.255 0 0 1 7 12.25z'
          }),
          _react2.default.createElement('path', {
            d: 'M6.125 9.987L3.138 7l1.237-1.237 1.75 1.75 3.5-3.5 1.237 1.237z'
          })
        )
      );
    }
  }]);

  return Success;
}(_react.PureComponent);

Success.defaultProps = {
  color: _config2.default.colors['serious-black'],
  size: 16
};

Success.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = Success;