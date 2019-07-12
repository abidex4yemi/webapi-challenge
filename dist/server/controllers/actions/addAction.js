"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAction = void 0;

var _model = require("../../model");

var _util = require("../../util");

/**
 * Insert new action
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
const addAction = async (req, res, next) => {
  try {
    // Get action from req body
    const actionDetails = req.body.sanitizedBody; // Check if project id is valid

    await _model.Project.getById(actionDetails.project_id); // Insert new action

    const {
      id
    } = await _model.Action.insert(actionDetails); // Get newly persisted action

    const createdAction = await _model.Action.getById(id);
    return res.status(_util.CREATED).json((0, _util.createSuccess)({
      data: createdAction
    }));
  } catch (error) {
    next((0, _util.createError)({
      message: 'Project ID is invalid.',
      status: _util.NOT_FOUND
    }));
  }
};

exports.addAction = addAction;