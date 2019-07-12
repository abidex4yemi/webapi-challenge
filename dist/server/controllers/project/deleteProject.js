"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProject = void 0;

var _model = require("../../model");

var _util = require("../../util");

/**
 * Delete a project given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
const deleteProject = async (req, res, next) => {
  try {
    const {
      id
    } = req.project; // Delete project from database

    await _model.Project.remove(id);
    return res.status(_util.OK).json((0, _util.createSuccess)({
      success: true,
      message: 'Project deleted successfully'
    }));
  } catch (error) {
    next(error);
  }
};

exports.deleteProject = deleteProject;