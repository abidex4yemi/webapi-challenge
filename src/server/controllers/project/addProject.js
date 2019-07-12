import { Project } from '../../model';
import { CREATED, createSuccess } from '../../util';

/**
 * Insert new project
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const addProject = async (req, res, next) => {
	try {
		// Get project from req body
		const projectDetails = req.body.sanitizedBody;

		// Insert new project
		const { id } = await Project.insert(projectDetails);

		// Get newly created project
		const createdProject = await Project.getById(id);

		return res.status(CREATED).json(
			createSuccess({
				data: createdProject
			})
		);
	} catch (error) {
		return next(error);
	}
};
