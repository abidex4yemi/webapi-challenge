"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProject = void 0;

var _model = require("../../model");

var _util = require("../../util");

/**
 * Insert new project
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
const addProject = async (req, res, next) => {
  try {
    // Get project from req body
    const projectDetails = req.body.sanitizedBody; // Insert new project

    const {
      id
    } = await _model.Project.insert(projectDetails); // Get newly created project

    const createdProject = await _model.Project.getById(id);
    return res.status(_util.CREATED).json((0, _util.createSuccess)({
      data: createdProject
    }));
  } catch (error) {
    return next(error);
  }
};

exports.addProject = addProject;