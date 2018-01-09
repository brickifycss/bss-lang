'use strict';

var Comment = function () {
  this.transpiled = '';
  this.comment = '';
};
Comment.def = /^\/\*.*$/;

Object.assign(Comment.prototype, {
  transpile: function () {
    this.transpiled = this.comment;

    return this;
  },
  parse: function (global) {
    var content = this.match[0];
    // Start comment
    if (content.match(/^\/\*/)) {
      global.lexicon = this;
      if (content.match(/\*\/$/)) { // End comment
        global.lexicon = null;

        this.parent.definitions.push(this);
      }
    } else if (content.match(/\*\/$/)) { // End comment
      global.lexicon = null;
      this.parent.definitions.push(this);
    }

    this.comment += content + '\n';

    return this;
  }
});

module.exports = Comment;
