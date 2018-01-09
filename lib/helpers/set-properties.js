'use strict';

module.exports = function (obj, properties) {
  Object.assign(obj, properties);
  return obj;
};
