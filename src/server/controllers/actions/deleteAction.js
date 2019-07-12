import { Action } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Delete a action given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
export const deleteAction = async (req, res, next) => {
	try {
		const { id } = req.action;

		// Delete action from database
		await Action.remove(id);

		return res.status(OK).json(
			createSuccess({
				success: true,
				message: 'Action deleted successfully'
			})
		);
	} catch (error) {
		next(error);
	}
};
