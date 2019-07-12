'use strict';

var _actionQueryBuilder = require("../../db/helpers/actionQueryBuilder");

module.exports = knex => {
  const models = (0, _actionQueryBuilder.actionQueryBuilder)(knex);
  return { ...models
  };
};