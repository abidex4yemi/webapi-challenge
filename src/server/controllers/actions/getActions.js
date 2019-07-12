import { Action } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Get all actions
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getActions = async (req, res, next) => {
	try {
		const actions = await Action.getAll();

		return res.status(OK).json(
			createSuccess({
				data: actions
			})
		);
	} catch (error) {
		return next(error);
	}
};
