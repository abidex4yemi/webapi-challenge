"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAction = void 0;

var _model = require("../../model");

var _util = require("../../util");

/**
 * Update action given the project id and action id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
const updateAction = async (req, res, next) => {
  try {
    const actionDetails = req.body.sanitizedBody;
    const actionId = req.action.id;
    const project = await _model.Project.getById(actionDetails.project_id);

    if (project === null) {
      next((0, _util.createError)({
        message: 'Project ID is invalid.',
        status: _util.NOT_FOUND
      }));
    }

    const updatedAction = await _model.Action.update(actionId, actionDetails);
    return res.status(_util.OK).json((0, _util.createSuccess)({
      data: updatedAction,
      message: 'Action updated successfully'
    }));
  } catch (error) {
    next(error);
  }
};

exports.updateAction = updateAction;