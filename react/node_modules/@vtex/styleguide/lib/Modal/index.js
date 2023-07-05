'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactResponsiveModal = require('react-responsive-modal');

var _reactResponsiveModal2 = _interopRequireDefault(_reactResponsiveModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          centered = _props.centered,
          onClose = _props.onClose;


      return _react2.default.createElement(
        _reactResponsiveModal2.default,
        {
          open: isOpen,
          little: centered,
          onClose: onClose,
          classNames: {
            overlay: 'vtex-modal__overlay',
            modal: 'vtex-modal__modal br2',
            closeIcon: 'vtex-modal__close-icon'
          },
          styles: {
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            },
            modal: {
              padding: '3rem'
            },
            closeIcon: {
              top: '30px',
              right: '30px'
            }
          },
          closeIconSize: 18
        },
        this.props.children
      );
    }
  }]);

  return Modal;
}(_react.PureComponent);

Modal.defaultProps = {
  isOpen: false
};

Modal.propTypes = {
  /** Content of the modal */
  children: _propTypes2.default.node.isRequired,
  /** Center the modal (for small content) */
  centered: _propTypes2.default.bool,
  /** Show or hide the modal */
  isOpen: _propTypes2.default.bool.isRequired,

  onClose: _propTypes2.default.func.isRequired
};

exports.default = Modal;