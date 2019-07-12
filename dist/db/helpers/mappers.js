"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  intToBoolean: intToBoolean,
  booleanToint: booleanToint,
  projectToBody: projectToBody,
  actionToBody: actionToBody
};

function intToBoolean(_int) {
  return _int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function projectToBody(project) {
  var result = _objectSpread({}, project, {
    completed: intToBoolean(project.completed)
  });

  if (project.actions) {
    result.actions = project.actions.map(function (action) {
      return _objectSpread({}, action, {
        completed: intToBoolean(action.completed)
      });
    });
  }

  return result;
}

function actionToBody(action) {
  return _objectSpread({}, action, {
    completed: intToBoolean(action.completed)
  });
}