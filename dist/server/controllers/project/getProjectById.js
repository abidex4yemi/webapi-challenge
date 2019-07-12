'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjectById = void 0;

var _util = require("../../util");

/**
 * Get project by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
const getProjectById = (req, res) => {
  const project = req.project;
  return res.status(_util.OK).json((0, _util.createSuccess)({
    data: project
  }));
};

exports.getProjectById = getProjectById;