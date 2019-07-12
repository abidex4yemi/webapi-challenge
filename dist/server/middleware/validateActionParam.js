'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateActionParam = void 0;

var _model = require("../model");

var _util = require("../util");

/**
 * Validate action request parameter
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} actionId 
 */
const validateActionParam = async (req, res, next, actionId) => {
  try {
    const action = await _model.Action.getById(actionId);
    req.action = action;
    next();
  } catch (error) {
    return next((0, _util.createError)({
      message: 'Action ID is invalid.',
      status: _util.NOT_FOUND
    }));
  }
};

exports.validateActionParam = validateActionParam;