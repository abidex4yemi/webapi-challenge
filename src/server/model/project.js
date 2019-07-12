'use strict';

import { projectQueryBuilder } from '../../db/helpers/projectQueryBuilder';

module.exports = knex => {
	const models = projectQueryBuilder(knex);

	return {
		...models
	};
};
