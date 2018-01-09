'use strict';

module.exports = {
  type: '@fn',
  def: /@fn[\s\t]+(.+)(\(.+\)){1}$/,
  parents: ['root'],
  transpiled: null,
  transpile: function () {
    return this;
  },
  parse: function (global) {
    if (this.content.match(this.def)) {
      global.fn = global.fn || {};
      global.lexicon = this;
      this.fn = {
        name: this.match[1],
        block: 'function ' + this.match[2] + '{'
      };

      global.fn[this.fn.name] = this;
    } else {
      this.fn.block += this.content + '\n';
      // end todo
      if (this.content.match(/^return/)) {
        this.fn.block += '}\n';
        global.lexicon = null;
      }
    }

    return this;
  }
};
