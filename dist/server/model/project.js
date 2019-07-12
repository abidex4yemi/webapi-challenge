'use strict';

var _projectQueryBuilder = require("../../db/helpers/projectQueryBuilder");

module.exports = knex => {
  const models = (0, _projectQueryBuilder.projectQueryBuilder)(knex);
  return { ...models
  };
};