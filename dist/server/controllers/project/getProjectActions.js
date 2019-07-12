'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjectActions = void 0;

var _model = require("../../model");

var _util = require("../../util");

/**
 * Get project actions by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
const getProjectActions = async (req, res) => {
  try {
    const {
      id
    } = req.project;
    const actions = await _model.Project.getProjectActions(id);
    return res.status(_util.OK).json((0, _util.createSuccess)({
      data: actions
    }));
  } catch (error) {
    next(error);
  }
};

exports.getProjectActions = getProjectActions;