"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// creates a component that just renders its children
var createDumbComponent = function createDumbComponent() {
    return function (props) {
        return props.children ? _react2.default.Children.only(props.children) : _react2.default.createElement("noscript", null);
    };
};

exports.default = createDumbComponent;