"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionQueryBuilder = void 0;

var _mappers = _interopRequireDefault(require("./mappers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Action query builder
 * 
 * @param {Object} knex 
 * @returns {Object} {get, insert, update, remove}
 */
var actionQueryBuilder = function actionQueryBuilder(knex) {
  function getById(id) {
    var query = knex('actions');

    if (id) {
      return query.where('id', id).first().then(function (action) {
        return _mappers["default"].actionToBody(action);
      });
    }

    return query.then(function (actions) {
      return actions.map(function (action) {
        return _mappers["default"].actionToBody(action);
      });
    });
  }

  function insert(action) {
    return knex('actions').insert(action).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          id = _ref2[0];

      return getById(id);
    });
  }

  function update(id, changes) {
    return knex('actions').where('id', id).update(changes).then(function (count) {
      return count > 0 ? getById(id) : null;
    });
  }

  function remove(id) {
    return knex('actions').where('id', id).del();
  } // action is the model name


  return {
    name: 'Action',
    getById: getById,
    insert: insert,
    update: update,
    remove: remove
  };
};

exports.actionQueryBuilder = actionQueryBuilder;