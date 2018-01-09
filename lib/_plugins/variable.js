'use strict';

var declaration = require('../lexicon/declaration');
var onDeclarationParse = declaration.prototype.parse;

declaration.prototype.parse = function (global) {
  global.variables = global.variables || {};

  onDeclarationParse.call(this);

  if (global.variables[this.declaration.value]) {
    this.declaration.value = global.variables[this.declaration.value];
  }

  return this;
};


var onMatchedDeclaration = declaration.matched;

declaration.matched = function (line) {
  if (line.match(Variable.def)) {
    return false;
  }

  return onMatchedDeclaration ? onMatchedDeclaration(line) : true;
};


var Variable = function () {
};
Variable.def = /(^\$.+)[\s\t]+(.+$)/;

Object.assign(Variable.prototype, {
  transpiled: null,
  parse: function (global) {
    global.variables = global.variables || {};

    this.variable = {
      name: this.match[1],
      value: this.match[2]
    };

    global.variables[this.variable.name] = this.variable.value;
    return this;
  }
});

module.exports = Variable;
