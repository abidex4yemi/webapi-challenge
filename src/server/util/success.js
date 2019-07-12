'use strict';

/**
 * Define success status constants
 */
export const CREATED = 201;
export const OK = 200;

/**
 * Create success response data format
 * 
 * @param {object} { data, message } 
 * 
 */ export const createSuccess = ({
	data,
	message = 'successful'
}) => {
	return {
		success: true,
		message,
		body: data
	};
};
