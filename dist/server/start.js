'use strict';

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 2019; // Start application

_index.default.listen(PORT, console.log(`Server running on port: ${PORT}`));