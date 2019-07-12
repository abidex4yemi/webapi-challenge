"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAction = void 0;

var _model = require("../../model");

var _util = require("../../util");

/**
 * Delete a action given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
const deleteAction = async (req, res, next) => {
  try {
    const {
      id
    } = req.action; // Delete action from database

    await _model.Action.remove(id);
    return res.status(_util.OK).json((0, _util.createSuccess)({
      success: true,
      message: 'Action deleted successfully'
    }));
  } catch (error) {
    next(error);
  }
};

exports.deleteAction = deleteAction;