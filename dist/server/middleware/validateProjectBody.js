"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProjectBody = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Project validation schema
 */
var projectSchema = _joi["default"].object().keys({
  name: _joi["default"].string().min(3).trim().required(),
  description: _joi["default"].string().min(5).trim().required()
});
/**
 * Validate project body against defined schema
 */


var validateProjectBody = function validateProjectBody(req, res, next) {
  (0, _util.joiValidate)(req, res, next, projectSchema);
};

exports.validateProjectBody = validateProjectBody;