'use strict';

var indent = 0;

function transpile(parsedDefinitions, global, opts) {
  for (var i = 0, len = parsedDefinitions.length; i < len; i++) {
    var parsedDefinition = parsedDefinitions[i];

    global.transpiled += indent ? '  '.repeat(indent) : '';

    parsedDefinition.transpile(global);

    global.transpiled += parsedDefinition.transpiled;

    if (parsedDefinition.isBlock) {
      global.transpiled += ' {\n';
      indent++;
    }

    if (parsedDefinition.definitions && parsedDefinition.definitions.length) {
      transpile(parsedDefinition.definitions, global, {});
    }


    if (parsedDefinition.isBlock) {
      indent--;

      global.transpiled += indent ? '  '.repeat(indent) : '';

      global.transpiled += '}\n';
    }
  }

  opts.callBack && opts.callBack();
}

module.exports = transpile;
