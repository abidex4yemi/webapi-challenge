'use strict';
/**
 * Define success status constants
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSuccess = exports.OK = exports.CREATED = void 0;
var CREATED = 201;
exports.CREATED = CREATED;
var OK = 200;
/**
 * Create success response data format
 * 
 * @param {object} { data, message } 
 * 
 */

exports.OK = OK;

var createSuccess = function createSuccess(_ref) {
  var data = _ref.data,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'successful' : _ref$message;
  return {
    success: true,
    message: message,
    body: data
  };
};

exports.createSuccess = createSuccess;