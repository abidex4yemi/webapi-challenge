'use strict';

import { createSuccess, OK } from '../../util';

/**
 * Get project by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getProjectById = (req, res) => {
	const project = req.project;

	return res.status(OK).json(createSuccess({ data: project }));
};
