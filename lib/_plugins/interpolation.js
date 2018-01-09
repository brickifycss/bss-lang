'use strict';

var declaration = require('../lexicon/declaration');

var Interpolation = function () {
  this.code = '';
};
Interpolation.def = /^{{.*$/;

var parse = require('@brickify/m-pl');
var parser = require('../helpers/parser');
var onParsed = require('../on-parsed');

var onMatchedDeclaration = declaration.matched;

declaration.matched = function (line) {
  if (line.match(Interpolation.def)) {
    return false;
  }

  return onMatchedDeclaration ? onMatchedDeclaration(line) : true;
};

Object.assign(Interpolation.prototype, {
  parse: function (global) {
    var content = this.match[0];
    // Start comment
    if (content.match(/^{{/)) {
      global.lexicon = this;

      if (content.match(/}}$/)) { // End comment
        content = new Function(content
          .replace('{{', '')
          .replace('}}', '')
        )();

        global.lexicon = null;

        // todo return not return , multiline, add indent to content
        parse(content, parser, global, {
          callBack: onParsed.bind(null, global.definitions)
        });
      }
    } else if (content.match(/}}$/)) { // End comment
      content = new Function(this.code)();

      parse(content, parser, global, {
        callBack: onParsed.bind(null, global.definitions)
      });

      global.lexicon = null;
    } else {
      this.code += content;
    }
    return this;
  }
});

module.exports = Interpolation;
