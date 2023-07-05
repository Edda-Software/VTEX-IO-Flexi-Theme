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

var Check = function (_PureComponent) {
  _inherits(Check, _PureComponent);

  function Check() {
    _classCallCheck(this, Check);

    return _possibleConstructorReturn(this, (Check.__proto__ || Object.getPrototypeOf(Check)).apply(this, arguments));
  }

  _createClass(Check, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size;

      return _react2.default.createElement(
        'svg',
        {
          className: 'vtex-icon__check',
          viewBox: '0 0 18 18',
          xmlns: 'http://www.w3.org/2000/svg',
          width: size,
          height: size
        },
        _react2.default.createElement('path', {
          d: 'M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z',
          fill: color
        })
      );
    }
  }]);

  return Check;
}(_react.PureComponent);

Check.defaultProps = {
  color: _config2.default.colors['serious-black'],
  size: 16
};

Check.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = Check;