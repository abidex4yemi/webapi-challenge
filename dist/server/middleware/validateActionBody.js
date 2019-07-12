"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateActionBody = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Action validation schema
 */
var actionSchema = _joi["default"].object().keys({
  project_id: _joi["default"].number().required(),
  description: _joi["default"].string().min(5).trim().required(),
  notes: _joi["default"].string().min(5).trim().required()
});
/**
 * Validate action body against defined schema
 */


var validateActionBody = function validateActionBody(req, res, next) {
  (0, _util.joiValidate)(req, res, next, actionSchema);
};

exports.validateActionBody = validateActionBody;