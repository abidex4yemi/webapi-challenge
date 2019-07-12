"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Module dependencies
 */

/**
 *  Get all model file
 * 
 * @param {String} directory
 * @returns {Array} modelFiles
 */
var getModelFiles = function getModelFiles(directory) {
  var modelFiles = _fs["default"].readdirSync(directory).filter(function (file) {
    if (file.indexOf('.') !== 0 && file !== 'index.js') {
      return _path["default"].join(directory, file);
    }
  });

  return modelFiles;
}; // Get all model file based on this current directory


var modelFiles = getModelFiles(__dirname);
var models = modelFiles.reduce(function (modelsObj, filename) {
  var modelFile = require("./".concat(filename));

  var model = modelFile(_database["default"]);

  if (model) {
    modelsObj[model.name] = model;
  }

  return modelsObj;
}, {});
module.exports = models;