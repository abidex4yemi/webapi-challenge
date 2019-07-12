"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectQueryBuilder = void 0;

var _mappers = _interopRequireDefault(require("./mappers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Project query builder
 * 
 * @param {object} knex 
 * @returns {object} { get, insert, update, remove, getProjectActions }
 */
var projectQueryBuilder = function projectQueryBuilder(knex) {
  function getById(id) {
    var query = knex('projects as p');

    if (id) {
      query.where('p.id', id).first();
      var promises = [query, getProjectActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function (results) {
        var _results = _slicedToArray(results, 2),
            project = _results[0],
            actions = _results[1];

        if (project) {
          project.actions = actions;
          return _mappers["default"].projectToBody(project);
        } else {
          return null;
        }
      });
    }

    return query.then(function (projects) {
      return projects.map(function (project) {
        return _mappers["default"].projectToBody(project);
      });
    });
  }

  function insert(project) {
    return knex('projects').insert(project).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          id = _ref2[0];

      return getById(id);
    });
  }

  function update(id, changes) {
    return knex('projects').where('id', id).update(changes).then(function (count) {
      return count > 0 ? getById(id) : null;
    });
  }

  function remove(id) {
    return knex('projects').where('id', id).del();
  }

  function getProjectActions(projectId) {
    return knex('actions').where('project_id', projectId).then(function (actions) {
      return actions.map(function (action) {
        return _mappers["default"].actionToBody(action);
      });
    });
  } // project is the model name


  return {
    name: 'Project',
    getById: getById,
    insert: insert,
    update: update,
    remove: remove,
    getProjectActions: getProjectActions
  };
};

exports.projectQueryBuilder = projectQueryBuilder;