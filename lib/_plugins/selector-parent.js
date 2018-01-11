'use strict';

var SelectorLexicon = require('../lexicon/selector');

var parse = SelectorLexicon.prototype.parse;

SelectorLexicon.prototype.parse = function (global) {

    parse.call(this, global);

  this.selectors = this.selectors.filter(function (selector) {
    if (selector.match(/\s&/) && selector[0] !== '.' && selector[0] !== '#') {
      return false;
    }
    return true;

  }).map(function (selector) {
    return selector.replace(' &', '');
  })

  return this;
};

module.exports = SelectorLexicon;
