/**
 * Module dependencies
 */
import fs from 'fs';
import path from 'path';
import knex from '../../config/database';

/**
 *  Get all model file
 * 
 * @param {String} directory
 * @returns {Array} modelFiles
 */
const getModelFiles = directory => {
	const modelFiles = fs.readdirSync(directory).filter(file => {
		if (file.indexOf('.') !== 0 && file !== 'index.js') {
			return path.join(directory, file);
		}
	});

	return modelFiles;
};

// Get all model file based on this current directory
const modelFiles = getModelFiles(__dirname);

const models = modelFiles.reduce((modelsObj, filename) => {
	const modelFile = require(`./${filename}`);

	const model = modelFile(knex);

	if (model) {
		modelsObj[model.name] = model;
	}

	return modelsObj;
}, {});

module.exports = models;
