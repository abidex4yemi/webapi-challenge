"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProject = void 0;

var _model = require("../../model");

var _util = require("../../util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Update project given the project id and action id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
var updateProject =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var projectDetails, projectId, project, updatedProject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            projectDetails = req.body.sanitizedBody;
            projectId = req.project.id;
            _context.next = 5;
            return _model.Project.getById(projectId);

          case 5:
            project = _context.sent;

            if (project === null) {
              next((0, _util.createError)({
                message: 'Project ID is invalid.',
                status: _util.NOT_FOUND
              }));
            }

            _context.next = 9;
            return _model.Project.update(projectId, projectDetails);

          case 9:
            updatedProject = _context.sent;
            return _context.abrupt("return", res.status(_util.OK).json((0, _util.createSuccess)({
              data: updatedProject,
              message: 'Project updated successfully'
            })));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function updateProject(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateProject = updateProject;