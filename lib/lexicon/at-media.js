'use strict';

var blockRule = require('../helpers/blockRule');
var selector = require('../lexicon/selector');

var MediaQuery = function () {
  this.definitions = [];
};

selector.prototype.parents.push(MediaQuery);

module.exports = blockRule(
  /^@media[\s\t]+.+$/,
  MediaQuery
);
