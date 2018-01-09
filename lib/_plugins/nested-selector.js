'use strict';

var Selector = require('../lexicon/selector');

Selector.prototype.parents.push(Selector);

var parse = Selector.prototype.parse;

Selector.prototype.parse = function (global) {
  var parent = this.parent;

  if (this.parent && this.parent instanceof Selector) {
    this.parent = this.parent.parent;
  }

  parse.call(this, global);

  this.parent = parent;

  if (this.parent && this.parent instanceof Selector) {
    var newSelectors = [];
    for (var i = 0, len = this.parent.selectors.length; i < len; i++) {
      var parentSelector = this.parent.selectors[i];
      for (var j = 0, len2 = this.selectors.length; j < len2; j++) {
        var selector = this.selectors[j];
        newSelectors.push(parentSelector + ' ' + selector);
      }
    }
    this.selectors = newSelectors;
  }

  return this;
};

module.exports = Selector;
