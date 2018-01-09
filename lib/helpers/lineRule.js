'use strict';

var LineRule = function () {
};

LineRule.prototype.transpile = function () {
  this.transpiled = this.match[0] + '\n';
  return this;
};

LineRule.prototype.parse = function (global) {
  global.definitions.push(this);
  return this;
};

module.exports = function (def, Lexicon) {
  Object.assign(
    Lexicon.prototype,
    LineRule.prototype
  );

  Lexicon.def = def;

  return Lexicon;
};
