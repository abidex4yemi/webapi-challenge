"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectQueryBuilder = void 0;

var _mappers = _interopRequireDefault(require("./mappers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Project query builder
 * 
 * @param {object} knex 
 * @returns {object} { get, insert, update, remove, getProjectActions }
 */
const projectQueryBuilder = knex => {
  function getAll() {
    return knex('projects as p').then(projects => {
      return projects.map(project => _mappers.default.projectToBody(project));
    });
  }

  function getById(id) {
    knex('projects as p').where('p.id', id).first();
    const promises = [query, getProjectActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function (results) {
      let [project, actions] = results;

      if (project) {
        project.actions = actions;
        return _mappers.default.projectToBody(project);
      } else {
        return null;
      }
    });
  }

  function insert(project) {
    return knex('projects').insert(project).then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('projects').where('id', id).update(changes).then(count => count > 0 ? getById(id) : null);
  }

  function remove(id) {
    return knex('projects').where('id', id).del();
  }

  function getProjectActions(projectId) {
    return knex('actions').where('project_id', projectId).then(actions => actions.map(action => _mappers.default.actionToBody(action)));
  } // project is the model name


  return {
    name: 'Project',
    getById,
    insert,
    update,
    remove,
    getProjectActions,
    getAll
  };
};

exports.projectQueryBuilder = projectQueryBuilder;