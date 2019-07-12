'use strict';

import { createSuccess, OK } from '../../helpers';

/**
 * Get action by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getActionById = (req, res) => {
	const action = req.action;

	return res.status(OK).json(createSuccess({ data: action }));
};
