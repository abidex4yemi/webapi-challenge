import mappers from './mappers';

/**
 * Project query builder
 * 
 * @param {object} knex 
 * @returns {object} { get, insert, update, remove, getProjectActions }
 */
export const projectQueryBuilder = knex => {
	function get(id) {
		let query = knex('projects as p');

		if (id) {
			query.where('p.id', id).first();

			const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

			return Promise.all(promises).then(function(results) {
				let [project, actions] = results;

				if (project) {
					project.actions = actions;

					return mappers.projectToBody(project);
				} else {
					return null;
				}
			});
		}

		return query.then(projects => {
			return projects.map(project => mappers.projectToBody(project));
		});
	}

	function insert(project) {
		return knex('projects')
			.insert(project)
			.then(([id]) => this.get(id));
	}

	function update(id, changes) {
		return knex('projects')
			.where('id', id)
			.update(changes)
			.then(count => (count > 0 ? this.get(id) : null));
	}

	function remove(id) {
		return knex('projects')
			.where('id', id)
			.del();
	}

	function getProjectActions(projectId) {
		return knex('actions')
			.where('project_id', projectId)
			.then(actions => actions.map(action => mappers.actionToBody(action)));
	}

	// project is the model name
	return {
		name: 'Project',
		get,
		insert,
		update,
		remove,
		getProjectActions
	};
};
