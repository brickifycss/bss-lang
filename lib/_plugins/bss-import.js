'use strict';

var fs = require('fs');
var path = require('path');

var parse = require('@brickify/m-pl');
var parser = require('../helpers/parser');

var onParsed = require('../on-parsed');

var BssImport = function () {
};
BssImport.def = /require\((.+)\)/;

Object.assign(BssImport.prototype, {
  parse: function (global) {
    var content = fs.readFileSync(path.resolve(this.match[1] + '.bss'), 'utf8');
    parse(content, parser, global, {
      callBack: onParsed.bind(null, global.definitions)
    });
    return this;
  }
});

module.exports = BssImport;

