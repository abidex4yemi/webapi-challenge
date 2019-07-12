import mappers from './mappers';

/**
 * Action query builder
 * 
 * @param {Object} knex 
 * @returns {Object} {get, insert, update, remove}
 */
export const actionQueryBuilder = knex => {
	function get(id) {
		let query = knex('actions');

		if (id) {
			return query
				.where('id', id)
				.first()
				.then(action => mappers.actionToBody(action));
		}

		return query.then(actions => {
			return actions.map(action => mappers.actionToBody(action));
		});
	}

	function insert(action) {
		return knex('actions')
			.insert(action)
			.then(([id]) => this.get(id));
	}

	function update(id, changes) {
		return knex('actions')
			.where('id', id)
			.update(changes)
			.then(count => (count > 0 ? this.get(id) : null));
	}

	function remove(id) {
		return knex('actions')
			.where('id', id)
			.del();
	}

	// action is the model name
	return {
		name: 'action',
		get,
		insert,
		update,
		remove
	};
};