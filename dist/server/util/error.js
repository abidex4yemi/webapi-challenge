'use strict';
/**
 * Define error constants
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createError = exports.GENERIC_ERROR = exports.NOT_FOUND = exports.CONFLICT = exports.BAD_REQUEST = void 0;
const BAD_REQUEST = 400;
exports.BAD_REQUEST = BAD_REQUEST;
const CONFLICT = 409;
exports.CONFLICT = CONFLICT;
const NOT_FOUND = 404;
exports.NOT_FOUND = NOT_FOUND;
const GENERIC_ERROR = 500;
/**
 * Create new error
 * 
 * @param {String} message
 * @param {number} status 
 * 
 * @returns {object} error
 */

exports.GENERIC_ERROR = GENERIC_ERROR;

const createError = ({
  message = 'Something went wrong, try again...',
  status = 500
}) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

exports.createError = createError;