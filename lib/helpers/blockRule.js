'use strict';

var BlockRule = function () {
  this.definitions = [];
};
BlockRule.prototype.transpile = function () {
  this.transpiled = this.match[0];
  return this;
};
BlockRule.prototype.parse = function () {
  this.parent.definitions.push(this);
  return this;
};
BlockRule.prototype.parents = [];

BlockRule.prototype.definitions = [];
BlockRule.prototype.isBlock = true;


module.exports = function (def, Lexicon) {
  Object.assign(
    Lexicon.prototype,
    BlockRule.prototype
  );

  Lexicon.def = def;

  return Lexicon;
};
