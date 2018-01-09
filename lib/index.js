'use strict';


var parse = require('@brickify/m-pl');

var transpile = require('./transpile');
var parser = require('./helpers/parser');
var onParsed = require('./on-parsed');
var onTranspiled = require('./on-transpiled');
var registerLexicons = require('./helpers/register-lexicons');
process.__verbose = false;

function BSS(content, options) {
  process.$root = this;

  this.column = 0;
  this.rules = [];
  this.definitions = [];
  this.transpiled = '';
  this.lexicon = null;
  this.indexes = {};

  console.time('BSS');

  if (process.__verbose) {
    console.log('BSS preprocessor STARTED!');
  }
  options = options || {};

  options.plugins && registerLexicons(options.plugins);

  content = options.onStart && options.onStart(content, this) || content;

  this.start();

  parse(content, parser, this, {
    callBack: onParsed.bind(null, this.definitions)
  });


  transpile(this.definitions, this, {
    callBack: onTranspiled.bind(null, this)
  });


  options.onEnd && options.onEnd(this);

  this.end();

  if (process.__verbose) {
    console.log('BSS preprocessor ENDED!');
  }

  console.timeEnd('BSS');
}

BSS.prototype.start = function () {
};
BSS.prototype.end = function () {
};

module.exports = BSS;
