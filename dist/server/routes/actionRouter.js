"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = require("../middleware");

var _actions = require("../controllers/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // Validate any request url parameter (id) to action route
// `Note: router.param()` is a native method of express router


exports.actionRouter = router;
router.param('id', _middleware.validateActionParam);
router.route('/actions').post(_middleware.validateActionBody, _actions.addAction);
router.route('/actions/:id').get(_actions.getActionById).put(_middleware.validateActionBody, _actions.updateAction).delete(_actions.deleteAction);