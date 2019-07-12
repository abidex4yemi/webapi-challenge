'use strict';

import { BAD_REQUEST, CONFLICT, NOT_FOUND, GENERIC_ERROR } from '../util';

/**
 * Handle bad request error
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next
 * @param {object} err 
 */
const badRequest = (err, req, res, next) => {
	if (err.status !== BAD_REQUEST) {
		return next(err);
	}

	// Handle invalid JSON body
	if (err.type && err.type.includes('entity.parse.failed')) {
		return res.status(BAD_REQUEST).json({
			ok: false,
			errors: [
				{
					message: 'Invalid JSON object check request body',
					body: err.body
				}
			]
		});
	}

	return res.status(BAD_REQUEST).json({
		ok: false,
		errors: [err]
	});
};

/**
 * Handle resource not found error
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const notFound = (err, req, res, next) => {
	if (err.status !== NOT_FOUND) {
		return next(err);
	}

	return res.status(NOT_FOUND).json({
		ok: false,
		message: err.message || 'Resource not found',
		errors: [err]
	});
};

/**
 * Handle resource resource already exist error
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const resourceConflict = (err, req, res, next) => {
	if (err.status !== CONFLICT) {
		return next(err);
	}

	return res.status(CONFLICT).json({
		ok: false,
		errors: [err]
	});
};

/**
 * Handle server error
 * 
 * @param {object} err 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
const genericError = (err, req, res, next) => {
	return res.status(GENERIC_ERROR).json({
		ok: false,
		message: err.message || 'Internal server error',
		errors: [err]
	});
};

/**
 * Package all error handlers as object
 */
const allMiddlewareAsObject = {
	badRequest,
	notFound,
	resourceConflict,
	genericError
};

/**
 * Export all error middleware as an array
 * 
 */
export const allErrorHandler = () => {
	const allErrorMiddlewareAsArray = Object.keys(allMiddlewareAsObject).map(key => allMiddlewareAsObject[key]);

	return allErrorMiddlewareAsArray;
};
