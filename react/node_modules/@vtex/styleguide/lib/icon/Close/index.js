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

var Close = function (_PureComponent) {
  _inherits(Close, _PureComponent);

  function Close() {
    _classCallCheck(this, Close);

    return _possibleConstructorReturn(this, (Close.__proto__ || Object.getPrototypeOf(Close)).apply(this, arguments));
  }

  _createClass(Close, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size;

      return _react2.default.createElement(
        'svg',
        {
          className: 'vtex-icon__close',
          viewBox: '0 0 8 8',
          xmlns: 'http://www.w3.org/2000/svg',
          width: size,
          height: size
        },
        _react2.default.createElement('path', {
          d: 'M7.829.171a.552.552 0 0 0-.8 0L4 3.2.971.171a.552.552 0 0 0-.8 0 .552.552 0 0 0 0 .8L3.2 4 .171 7.029a.552.552 0 0 0 0 .8.519.519 0 0 0 .4.171.519.519 0 0 0 .4-.171L4 4.8l3.029 3.029a.617.617 0 0 0 .4.171.617.617 0 0 0 .4-.171.552.552 0 0 0 0-.8L4.8 4 7.829.971a.552.552 0 0 0 0-.8z',
          fill: color
        })
      );
    }
  }]);

  return Close;
}(_react.PureComponent);

Close.defaultProps = {
  color: _config2.default.colors['serious-black'],
  size: 16
};

Close.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = Close;