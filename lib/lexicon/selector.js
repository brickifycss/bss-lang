'use strict';

var Bss = require('../index');

var Selector = function (global) {
  this.definitions = [];
  this.selectors = [];
  this.isBlock = true;
  this.target = global;
  this.transpiled = '';
};
Selector.def = /^[^@]+[,:]{1}$/;

Object.assign(Selector.prototype, {
  parents: [Bss],
  transpile: function () {
    this.transpiled = this.selectors.join(', ');

    return this;
  },
  parse: function (global) {
    var selectors = this.match[0];
    var lastChar = selectors[selectors.length - 1];
    selectors = selectors.slice(0, -1).split(',');

    selectors = selectors.map(function (selector) {
      return selector.trim();
    });

    this.selectors = this.selectors.concat(selectors);

    if (lastChar === ':') {
      global.lexicon = null;
      this.parent.definitions.push(this);
    }
    else {
      global.lexicon = this;
    }



    return this;
  }
});

module.exports = Selector;
