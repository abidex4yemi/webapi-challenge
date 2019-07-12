'use strict';
/**
 * Define error constants
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createError = exports.GENERIC_ERROR = exports.NOT_FOUND = exports.CONFLICT = exports.BAD_REQUEST = void 0;
var BAD_REQUEST = 400;
exports.BAD_REQUEST = BAD_REQUEST;
var CONFLICT = 409;
exports.CONFLICT = CONFLICT;
var NOT_FOUND = 404;
exports.NOT_FOUND = NOT_FOUND;
var GENERIC_ERROR = 500;
/**
 * Create new error
 * 
 * @param {String} message
 * @param {number} status 
 * 
 * @returns {object} error
 */

exports.GENERIC_ERROR = GENERIC_ERROR;

var createError = function createError(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Something went wrong, try again...' : _ref$message,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 500 : _ref$status;
  var error = new Error(message);
  error.status = status;
  return error;
};

exports.createError = createError;