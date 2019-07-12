"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAction = void 0;

var _model = require("../../model");

var _util = require("../../util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Insert new action
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
var addAction =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var actionDetails, _ref2, id, createdAction;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Get action from req body
            actionDetails = req.body.sanitizedBody; // Check if project id is valid

            _context.next = 4;
            return _model.Project.getById(actionDetails.project_id);

          case 4:
            _context.next = 6;
            return _model.Action.insert(actionDetails);

          case 6:
            _ref2 = _context.sent;
            id = _ref2.id;
            _context.next = 10;
            return _model.Action.getById(id);

          case 10:
            createdAction = _context.sent;
            return _context.abrupt("return", res.status(_util.CREATED).json((0, _util.createSuccess)({
              data: createdAction
            })));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            next((0, _util.createError)({
              message: 'Project ID is invalid.',
              status: _util.NOT_FOUND
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function addAction(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.addAction = addAction;