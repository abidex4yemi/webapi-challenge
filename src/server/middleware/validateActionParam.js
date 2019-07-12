'use strict';

import { Action } from '../model';
import { NOT_FOUND, createError } from '../util';

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
			console.log(Object.keys(data).length === 0);
			if (Object.keys(data).length === 0) {
				return res.status(NOT_FOUND).json({
					message: 'The requested resource could not be found.',
					status: NOT_FOUND
				});
			}

			req.action = data;

			next();
		})
		.catch(error => {
			return res.status(NOT_FOUND).json({
				message: 'The requested resource could not be found.',
				status: NOT_FOUND
			});
		});
};
