'use strict';

var lineRule = require('../helpers/lineRule');

var Charset = function () {
};

module.exports = lineRule(
  /^@charset.+/,
  Charset
);
