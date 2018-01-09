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
  parse: function () {
    var selectors = this.match[0];
    this.lastChar = selectors[selectors.length - 1];
    this.selectors = selectors.slice(0, -1).split(',');

    this.selectors = this.selectors.map(function (selector) {
      return selector.trim();
    });

    if (this.previous && this.previous instanceof Selector && this.previous.lastChar === ',') {
      this.rootParent = this.previous.rootParent;
      this.rootParent.selectors = this.rootParent.selectors.concat(this.selectors);
    } else {
      this.rootParent = this;
      this.parent.definitions.push(this);
    }


    return this;
  }
});

module.exports = Selector;
