'use strict';

import { Project } from '../../model';
import { createSuccess, OK } from '../../util';

/**
 * Get project actions by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getProjectActions = async (req, res) => {
	try {
		const { id } = req.project;

		const actions = await Project.getProjectActions(id);

		return res.status(OK).json(createSuccess({ data: actions }));
	} catch (error) {
		next(error);
	}
};
