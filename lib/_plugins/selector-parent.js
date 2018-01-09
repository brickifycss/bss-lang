'use strict';

var SelectorLexicon = require('../lexicon/selector');

var parse = SelectorLexicon.prototype.parse;

SelectorLexicon.prototype.parse = function (global) {
  parse.call(this, global);

  this.selectors = this.selectors.map(function (selector) {
    return selector.replace(' &', '');
  });

  return this;
};

module.exports = SelectorLexicon;
