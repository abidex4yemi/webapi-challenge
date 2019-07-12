'use strict';

import { Project } from '../model';
import { NOT_FOUND, createError } from '../util';

/**
 * Validate project request parameter
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} projectId 
 */
export const validateProjectParam = async (req, res, next, projectId) => {
	try {
		const project = await Project.getById(projectId);

		if (project === null) {
			return next(
				createError({
					message: 'Project ID is invalid.',
					status: NOT_FOUND
				})
			);
		}

		req.project = project;

		next();
	} catch (error) {
		return next(error);
	}
};
