import { Action, Project } from '../../model';
import { createError, createSuccess, OK, NOT_FOUND } from '../../util';

/**
 * Update action given the project id and action id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const updateAction = async (req, res, next) => {
	try {
		const actionDetails = req.body.sanitizedBody;

		const actionId = req.action.id;

		const project = await Project.getById(actionDetails.project_id);

		if (project === null) {
			next(
				createError({
					message: 'Project ID is invalid.',
					status: NOT_FOUND
				})
			);
		}

		const updatedAction = await Action.update(actionId, actionDetails);

		return res.status(OK).json(
			createSuccess({
				data: updatedAction,
				message: 'Action updated successfully'
			})
		);
	} catch (error) {
		next(error);
	}
};
