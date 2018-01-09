'use strict';

var blockRule = require('../helpers/blockRule');
var delcaration = require('../lexicon/declaration');

var Page = function () {
  this.definitions = [];
};
delcaration.prototype.parents.push(Page);

module.exports = blockRule(
  /^@page.*$/,
  Page
);
