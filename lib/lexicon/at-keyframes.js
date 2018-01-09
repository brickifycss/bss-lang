'use strict';

var blockRule = require('../helpers/blockRule');
var selector = require('../lexicon/selector');

var Keyframes = function () {
  this.definitions = [];
};

selector.prototype.parents.push(Keyframes);

module.exports = blockRule(
  /^@keyframes.+$/,
  Keyframes
);
