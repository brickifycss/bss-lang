'use strict';

var Declaration = require('../lexicon/declaration');
var parse = Declaration.prototype.parse;
Declaration.prototype.parents.push(Declaration);


Declaration.prototype.parse = function (global) {
  parse.call(this, global);

  if (this.parent instanceof Declaration) {
    this.declaration.key = this.parent.declaration.key + '-' + this.declaration.key;

    this.parent.parent.definitions.push(this);

    if (!this.next.trim().match(Declaration.def)) {
      this.parent.parent.definitions.splice(this.parent.parent.definitions.indexOf(this.parent), 1);
    }
  }

  return this;
};

module.exports = Declaration;

// TODO hooks, common hooks, free hooks , lexicons, placeholder
