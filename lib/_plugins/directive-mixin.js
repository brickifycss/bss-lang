'use strict';

var Mixin = function ($root) {
  $root.mixins = $root.mixins || {};
  this.isBlock = true;
  this.definitions = [];
};

Mixin.def = /^@*mx:[^\s\t]+([^()]+)(\(.+\)*)$/;

Object.assign(Mixin.prototype, {
  parse: function ($root) {
    if (this.match[0][0] !== '@') {
      $root.definitions.push($root.mixins[this.match[1]].definitions[0]);
      return this;
    }

    this.mixin = {
      name: this.match[1],
      parameters: this.match[2] && this.match[2].split(',')
    };

    $root.mixins[this.mixin.name] = this;

    return this;
  }
});

module.exports = Mixin;
