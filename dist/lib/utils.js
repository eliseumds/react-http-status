"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// pluck a key from an object
var pluck = exports.pluck = function pluck(key) {
  return function (obj) {
    return obj[key];
  };
};

// return the maximum of 2 values
var max = exports.max = function max(x, y) {
  return x > y ? x : y;
};

// a function that does not do anything
var noop = exports.noop = function noop() {};

// return whether the value is existing
var exists = exports.exists = function exists(x) {
  return x !== null && typeof x !== "undefined";
};