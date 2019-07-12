'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActionById = void 0;

var _util = require("../../util");

/**
 * Get action by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
var getActionById = function getActionById(req, res) {
  var action = req.action;
  return res.status(_util.OK).json((0, _util.createSuccess)({
    data: action
  }));
};

exports.getActionById = getActionById;