'use strict';

var Selector = require('./selector');

var Declaration = function () {
  this.transpiled = '';
  this.match = null;
  this.parent = null;
  this.declaration = {};

  // todo temp
  this.definitions = [];
};
Declaration.def = /^([^@,/\s\t]+)[\s\t]+(.+)$/;

Object.assign(Declaration.prototype, {
  parents: [Selector],
  transpile: function () {
    this.transpiled = this.declaration.key + ': ' + this.declaration.value + ';\n';

    return this;
  },
  parse: function () {
    this.declaration = {
      key: this.match[1],
      value: this.match[2]
    };

    this.parent.definitions.push(this);

    return this;
  }
});

module.exports = Declaration;
