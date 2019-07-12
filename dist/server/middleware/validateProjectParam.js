'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProjectParam = void 0;

var _model = require("../model");

var _util = require("../util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Validate project request parameter
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} projectId 
 */
var validateProjectParam =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next, projectId) {
    var project;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model.Project.getById(projectId);

          case 3:
            project = _context.sent;

            if (!(project === null)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", next((0, _util.createError)({
              message: 'Project ID is invalid.',
              status: _util.NOT_FOUND
            })));

          case 6:
            req.project = project;
            next();
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function validateProjectParam(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.validateProjectParam = validateProjectParam;