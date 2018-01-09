'use strict';

module.exports = function (obj, property, value) {
  obj[property] = value;
  return obj;
};
