'use strict'; // Get node env if exist or default to development

var env = process.env.NODE_ENV || 'development';
/**
 * Module dependencies
 */

var knexModule = require('knex');

var knexConfig = require('../knexfile'); // Initialized knex based on environment variables


var knex = knexModule(knexConfig[env]);
module.exports = knex;