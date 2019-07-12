'use strict';
/**
 * Define success status constants
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSuccess = exports.OK = exports.CREATED = void 0;
const CREATED = 201;
exports.CREATED = CREATED;
const OK = 200;
/**
 * Create success response data format
 * 
 * @param {object} { data, message } 
 * 
 */

exports.OK = OK;

const createSuccess = ({
  data,
  message = 'successful'
}) => {
  return {
    success: true,
    message,
    body: data
  };
};

exports.createSuccess = createSuccess;