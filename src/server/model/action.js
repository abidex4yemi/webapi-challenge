'use strict';

import { actionQueryBuilder } from '../../db/helpers/actionQueryBuilder';

module.exports = knex => {
	const models = actionQueryBuilder(knex);

	return {
		...models
	};
};
