"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProject = void 0;

var _model = require("../../model");

var _util = require("../../util");

/**
 * Update project given the project id and action id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
const updateProject = async (req, res, next) => {
  try {
    const projectDetails = req.body.sanitizedBody;
    const projectId = req.project.id;
    const project = await _model.Project.getById(projectId);

    if (project === null) {
      next((0, _util.createError)({
        message: 'Project ID is invalid.',
        status: _util.NOT_FOUND
      }));
    }

    const updatedProject = await _model.Project.update(projectId, projectDetails);
    return res.status(_util.OK).json((0, _util.createSuccess)({
      data: updatedProject,
      message: 'Project updated successfully'
    }));
  } catch (error) {
    next(error);
  }
};

exports.updateProject = updateProject;