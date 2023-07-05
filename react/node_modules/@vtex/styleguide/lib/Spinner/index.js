'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('vtex-tachyons/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var secondary = _ref.secondary,
      size = _ref.size;
  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 100 100',
      preserveAspectRatio: 'xMidYMid',
      height: size,
      width: size
    },
    _react2.default.createElement(
      'circle',
      {
        cx: '50',
        cy: '50',
        fill: 'none',
        stroke: secondary ? _config2.default.colors.white : _config2.default.colors.blue,
        strokeWidth: '10',
        r: '40',
        strokeDasharray: '188.49555921538757 64.83185307179586',
        transform: 'rotate(96 50 50)'
      },
      _react2.default.createElement('animateTransform', {
        attributeName: 'transform',
        type: 'rotate',
        calcMode: 'linear',
        values: '0 50 50;360 50 50',
        keyTimes: '0;1',
        dur: '1s',
        begin: '0s',
        repeatCount: 'indefinite'
      })
    )
  );
};

Spinner.propTypes = {
  secondary: _propTypes2.default.bool,
  size: _propTypes2.default.number
};

Spinner.defaultProps = {
  secondary: false,
  size: 40
};

exports.default = Spinner;