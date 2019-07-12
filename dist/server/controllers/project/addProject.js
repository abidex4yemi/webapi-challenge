"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProject = void 0;

var _model = require("../../model");

var _util = require("../../util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Insert new project
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
var addProject =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var projectDetails, _ref2, id, createdProject;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Get project from req body
            projectDetails = req.body.sanitizedBody; // Insert new project

            _context.next = 4;
            return _model.Project.insert(projectDetails);

          case 4:
            _ref2 = _context.sent;
            id = _ref2.id;
            _context.next = 8;
            return _model.Project.getById(id);

          case 8:
            createdProject = _context.sent;
            return _context.abrupt("return", res.status(_util.CREATED).json((0, _util.createSuccess)({
              data: createdProject
            })));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function addProject(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.addProject = addProject;