import { Action, Project } from '../../model';
import { CREATED, createSuccess, createError, NOT_FOUND } from '../../util';

/**
 * Insert new action
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const addAction = async (req, res, next) => {
	try {
		// Get action from req body
		const actionDetails = req.body.sanitizedBody;

		// Check if project id is valid
		await Project.getById(actionDetails.project_id);

		// Insert new action
		const { id } = await Action.insert(actionDetails);

		// Get newly persisted action
		const createdAction = await Action.getById(id);

		return res.status(CREATED).json(
			createSuccess({
				data: createdAction
			})
		);
	} catch (error) {
		next(
			createError({
				message: 'Project ID is invalid.',
				status: NOT_FOUND
			})
		);
	}
};
