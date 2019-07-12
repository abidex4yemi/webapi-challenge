import Joi from '@hapi/joi';
import { joiValidate } from '../util';

/**
 * Action validation schema
 */
const actionSchema = Joi.object().keys({
	project_id: Joi.number().required(),
	description: Joi.string()
		.min(5)
		.trim()
		.required(),
	notes: Joi.string()
		.min(5)
		.trim()
		.required()
});

/**
 * Validate action body against defined schema
 */
export const validateActionBody = (req, res, next) => {
	joiValidate(req, res, next, actionSchema);
};
