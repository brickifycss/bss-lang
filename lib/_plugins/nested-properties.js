'use strict';

var Declaration = require('../lexicon/declaration');
var parse = Declaration.prototype.parse;
Declaration.prototype.parents.push(Declaration);

Declaration.prototype.parse = function (global) {
  parse.call(this, global);

  if (this.parent instanceof Declaration) {
    if (this.parent.declaration.value === '-') {
      this.parent.parent.definitions.splice(this.parent.parent.definitions.indexOf(this), 1);
      this.parent.parent.definitions.push(this);
    }

    this.declaration.key = this.parent.declaration.key + '-' + this.declaration.key;
  }

  return this;
};

module.exports = Declaration;
