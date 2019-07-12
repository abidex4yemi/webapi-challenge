'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProjectParam = void 0;

var _model = require("../model");

var _util = require("../util");

/**
 * Validate project request parameter
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} projectId 
 */
const validateProjectParam = async (req, res, next, projectId) => {
  try {
    const project = await _model.Project.getById(projectId);

    if (project === null) {
      return next((0, _util.createError)({
        message: 'Project ID is invalid.',
        status: _util.NOT_FOUND
      }));
    }

    req.project = project;
    next();
  } catch (error) {
    return next(error);
  }
};

exports.validateProjectParam = validateProjectParam;