'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allErrorHandler = void 0;

var _util = require("../util");

/**
 * Handle bad request error
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next
 * @param {object} err 
 */
const badRequest = (err, req, res, next) => {
  if (err.status !== _util.BAD_REQUEST) {
    return next(err);
  } // Handle invalid JSON body


  if (err.type && err.type.includes('entity.parse.failed')) {
    return res.status(_util.BAD_REQUEST).json({
      ok: false,
      errors: [{
        message: 'Invalid JSON object check request body',
        body: err.body
      }]
    });
  }

  return res.status(_util.BAD_REQUEST).json({
    ok: false,
    errors: [err]
  });
};
/**
 * Handle resource not found error
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


const notFound = (err, req, res, next) => {
  if (err.status !== _util.NOT_FOUND) {
    return next(err);
  }

  return res.status(_util.NOT_FOUND).json({
    ok: false,
    message: err.message || 'Resource not found',
    errors: [err]
  });
};
/**
 * Handle resource resource already exist error
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


const resourceConflict = (err, req, res, next) => {
  if (err.status !== _util.CONFLICT) {
    return next(err);
  }

  return res.status(_util.CONFLICT).json({
    ok: false,
    errors: [err]
  });
};
/**
 * Handle server error
 * 
 * @param {object} err 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */


const genericError = (err, req, res, next) => {
  return res.status(_util.GENERIC_ERROR).json({
    ok: false,
    message: err.message || 'Internal server error',
    errors: [err]
  });
};
/**
 * Package all error handlers as object
 */


const allMiddlewareAsObject = {
  badRequest,
  notFound,
  resourceConflict,
  genericError
};
/**
 * Export all error middleware as an array
 * 
 */

const allErrorHandler = () => {
  const allErrorMiddlewareAsArray = Object.keys(allMiddlewareAsObject).map(key => allMiddlewareAsObject[key]);
  return allErrorMiddlewareAsArray;
};

exports.allErrorHandler = allErrorHandler;