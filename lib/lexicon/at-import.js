'use strict';

var lineRule = require('../helpers/lineRule');

var Import = function () {
};

module.exports = lineRule(
  /^@import[\s\t]+.+$/,
  Import
);
