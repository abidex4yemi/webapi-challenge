"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _project = require("../controllers/project");

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // Validate any request url parameter (id) to project route
// `Note: router.param()` is a native method of express router


exports.projectRouter = router;
router.param('id', _middleware.validateProjectParam);
router.route('/projects').post(_middleware.validateProjectBody, _project.addProject);
router.route('/projects/:id').get(_project.getProjectById).put(_middleware.validateProjectBody, _project.updateProject)["delete"](_project.deleteProject);
router.route('/projects/:id/actions').get(_project.getProjectActions);