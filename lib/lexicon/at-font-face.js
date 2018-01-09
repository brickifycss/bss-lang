'use strict';

var blockRule = require('../helpers/blockRule');
var delcaration = require('../lexicon/declaration');

var FontFace = function () {
  this.definitions = [];
};

delcaration.prototype.parents.push(FontFace);

module.exports = blockRule(
  /^@font-face.*$/,
  FontFace
);
