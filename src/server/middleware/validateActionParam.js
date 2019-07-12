'use strict';

import { Action } from '../model';
import { NOT_FOUND } from '../util';

/**
 * Validate action request parameter
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} actionId 
 */
export const validateActionParam = (req, res, next, actionId) => {
	Action.getById(actionId)
		.then(data => {
			if (!data) {
				return res.status(NOT_FOUND).json({
					message: 'The requested resource could not be found.',
					status: NOT_FOUND
				});
			}

			req.action = data;

			next();
		})
		.catch(next);
};
