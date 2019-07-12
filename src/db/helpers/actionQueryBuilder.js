import mappers from './mappers';

/**
 * Action query builder
 * 
 * @param {Object} knex 
 * @returns {Object} {get, insert, update, remove}
 */
export const actionQueryBuilder = knex => {
	function getAll() {
		return knex('actions').then(actions => {
			return actions.map(action => mappers.actionToBody(action));
		});
	}

	function getById(id) {
		return knex('actions')
			.where('id', id)
			.first()
			.then(action => mappers.actionToBody(action));
	}

	function insert(action) {
		return knex('actions')
			.insert(action)
			.then(([id]) => getById(id));
	}

	function update(id, changes) {
		return knex('actions')
			.where('id', id)
			.update(changes)
			.then(count => (count > 0 ? getById(id) : null));
	}

	function remove(id) {
		return knex('actions')
			.where('id', id)
			.del();
	}

	// action is the model name
	return {
		name: 'Action',
		getById,
		insert,
		update,
		remove,
		getAll
	};
};
