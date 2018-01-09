'use strict';

function logSuccess(lex) {
  console.log(lex.line + ':' + lex.column + ' :: ' +  lex.constructor.name + ' :: ' + lex.content);
}

module.exports = logSuccess;
