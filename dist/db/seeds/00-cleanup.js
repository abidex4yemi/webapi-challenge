"use strict";

var cleaner = require('knex-cleaner');

exports.seed = function (knex) {
  return cleaner.clean(knex);
};