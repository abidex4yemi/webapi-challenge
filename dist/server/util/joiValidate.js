"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joiValidate = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Validate request body 
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 * @param {object} schema 
 */
var joiValidate = function joiValidate(req, res, next, schema) {
  // validate request body against predefined schema
  var _Joi$validate = _joi["default"].validate(req.body, schema, {
    abortEarly: false
  }),
      error = _Joi$validate.error,
      value = _Joi$validate.value; // check for validation error


  if (error) {
    // Format error object of JOI
    var errors = error.details.map(function (current) {
      return {
        key: current.context.key,
        message: current.message.replace(/['"]/g, '')
      };
    });
    return res.status(400).json({
      errors: errors
    });
  } //Note: create a new key `sanitizedBody` to the body with sanitized value


  req.body.sanitizedBody = value;
  next();
};

exports.joiValidate = joiValidate;