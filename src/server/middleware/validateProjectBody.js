import Joi from '@hapi/joi';
import { joiValidate } from '../util';

/**
 * Project validation schema
 */
const projectSchema = Joi.object().keys({
	name: Joi.string()
		.min(3)
		.trim()
		.required(),
	description: Joi.string()
		.min(5)
		.trim()
		.required()
});

/**
 * Validate project body against defined schema
 */
export const validateProjectBody = (req, res, next) => {
	joiValidate(req, res, next, projectSchema);
};
