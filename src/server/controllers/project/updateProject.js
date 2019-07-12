import { Project } from '../../model';
import { createError, createSuccess, OK, NOT_FOUND } from '../../util';

/**
 * Update project given the project id and action id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const updateProject = async (req, res, next) => {
	try {
		const projectDetails = req.body.sanitizedBody;

		const projectId = req.project.id;

		const project = await Project.getById(projectId);

		if (project === null) {
			next(
				createError({
					message: 'Project ID is invalid.',
					status: NOT_FOUND
				})
			);
		}

		const updatedProject = await Project.update(projectId, projectDetails);

		return res.status(OK).json(
			createSuccess({
				data: updatedProject,
				message: 'Project updated successfully'
			})
		);
	} catch (error) {
		next(error);
	}
};
