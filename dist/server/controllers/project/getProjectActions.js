'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjectActions = void 0;

var _model = require("../../model");

var _util = require("../../util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Get project actions by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
var getProjectActions =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, actions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.project.id;
            _context.next = 4;
            return _model.Project.getProjectActions(id);

          case 4:
            actions = _context.sent;
            return _context.abrupt("return", res.status(_util.OK).json((0, _util.createSuccess)({
              data: actions
            })));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getProjectActions(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProjectActions = getProjectActions;