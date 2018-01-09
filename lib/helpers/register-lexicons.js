'use strict';

var lexicons = require('../lexicons');

function registerLexicons(lexiconsList) {
  for (var i = 0, len = lexiconsList.length; i < len; i++) {
    var index = lexicons.indexOf(lexiconsList[i]);

    if (index > -1) {
      lexicons[index] = lexiconsList[i];
    } else {
      lexicons.push(lexiconsList[i]);
    }

    lexiconsList[i].register && lexiconsList[i].register();
  }

  return lexicons;
}

module.exports = registerLexicons;
