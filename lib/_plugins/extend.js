'use strict';

var Selector = require('../lexicon/selector');
var declaration = require('../lexicon/declaration');

var Extend = function () {
};
Extend.def = /(.+)[\s\t]*=[\s\t]*(.+)/;

var onMatchedDeclaration = declaration.matched;

declaration.matched = function (line) {
  if (line.match(Extend.def)) {
    return false;
  }
  return onMatchedDeclaration ? onMatchedDeclaration(line) : true;
};

Object.assign(Extend.prototype, {
  parse: function (global) {
    var extendSelectors = this.match[1].split(',');
    var bySelectors = this.match[2].split(',');

    for (var i = 0, len = global.rules.length; i < len; i++) {
      var rule = global.rules[i];
      if (rule instanceof Selector) {
        var selectors = rule.selectors;

        for (var j = 0, len2 = selectors.length; j < len2; j++) {
          var selector = selectors[j];

          if (bySelectors.indexOf(selector) > -1) {
            rule.selectors = selectors.concat(extendSelectors);
          }
        }
      }
    }

    return this;
  }
});

module.exports = Extend;
