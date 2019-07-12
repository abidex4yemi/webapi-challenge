import { Project } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Delete a project given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
export const deleteProject = async (req, res, next) => {
	try {
		const { id } = req.project;

		// Delete project from database
		await Project.remove(id);

		return res.status(OK).json(
			createSuccess({
				success: true,
				message: 'Project deleted successfully'
			})
		);
	} catch (error) {
		next(error);
	}
};
