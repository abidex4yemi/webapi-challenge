"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionQueryBuilder = void 0;

var _mappers = _interopRequireDefault(require("./mappers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Action query builder
 * 
 * @param {Object} knex 
 * @returns {Object} {get, insert, update, remove}
 */
const actionQueryBuilder = knex => {
  function getAll() {
    return knex('actions').then(actions => {
      return actions.map(action => _mappers.default.actionToBody(action));
    });
  }

  function getById(id) {
    return knex('actions').where('id', id).first().then(action => _mappers.default.actionToBody(action));
  }

  function insert(action) {
    return knex('actions').insert(action).then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('actions').where('id', id).update(changes).then(count => count > 0 ? getById(id) : null);
  }

  function remove(id) {
    return knex('actions').where('id', id).del();
  } // action is the model name


  return {
    name: 'Action',
    getById,
    insert,
    update,
    remove,
    getAll
  };
};

exports.actionQueryBuilder = actionQueryBuilder;