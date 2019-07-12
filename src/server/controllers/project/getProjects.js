import { Project } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Get all projects
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getProjects = async (req, res, next) => {
	try {
		const projects = await Project.getAll();

		return res.status(OK).json(
			createSuccess({
				data: projects
			})
		);
	} catch (error) {
		return next(error);
	}
};
