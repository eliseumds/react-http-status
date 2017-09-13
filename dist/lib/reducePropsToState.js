"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require("./utils");

// constants
var INITIAL_CODE = -1;

// handle server state
var pluckCode = (0, _utils.pluck)("code");
var codeReducer = function codeReducer(state, code) {
    return (0, _utils.max)(state, code);
};

var reducePropsToState = function reducePropsToState(props) {
    return props.map(pluckCode).filter(_utils.exists).reduce(codeReducer, INITIAL_CODE);
};

exports.default = reducePropsToState;