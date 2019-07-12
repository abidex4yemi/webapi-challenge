'use strict';
/**
 * Application Main file
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _middleware = require("./middleware");

var _util = require("./util");

var _actionRouter = require("./routes/actionRouter");

var _projectRouter = require("./routes/projectRouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
/**
 * Set up middleware
 */

app.use(_express.default.json());
app.use((0, _cors.default)());
app.use((0, _morgan.default)('dev'));
app.use((0, _helmet.default)());
app.get('/', (req, res) => {
  return res.status(_util.OK).json((0, _util.createSuccess)({
    message: 'Welcome to home route...',
    data: []
  }));
});
app.use('/api/v1', [_actionRouter.actionRouter, _projectRouter.projectRouter]); // Handle invalid request

app.all('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'Route does not exist...',
    body: []
  });
}); // handle all application error

app.use((0, _middleware.allErrorHandler)());
var _default = app;
exports.default = _default;