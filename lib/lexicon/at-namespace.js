'use strict';

var lineRule = require('../helpers/lineRule');

var Namespace = function () {
};

module.exports = lineRule(
  /^@namespace[\s\t]+.+$/,
  Namespace
);
