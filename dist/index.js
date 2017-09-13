"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = require("react-side-effect");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _createDumbComponent = require("./lib/createDumbComponent");

var _createDumbComponent2 = _interopRequireDefault(_createDumbComponent);

var _reducePropsToState = require("./lib/reducePropsToState");

var _reducePropsToState2 = _interopRequireDefault(_reducePropsToState);

var _handleClientStateChange = require("./lib/handleClientStateChange");

var _handleClientStateChange2 = _interopRequireDefault(_handleClientStateChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// main component
// dependencies
var StatusCode = (0, _createDumbComponent2.default)();
StatusCode.propTypes = {
    code: _propTypes2.default.number.isRequired
};

// decorator
var applySideEffect = (0, _reactSideEffect2.default)(_reducePropsToState2.default, _handleClientStateChange2.default);

// ship it!
exports.default = applySideEffect(StatusCode);