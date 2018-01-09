'use strict';

var lexicons = require('../lexicons');
var getIndent = require('./get-indent');
var logSuccess = require('./log-success');
var setProperties = require('./set-properties');

var previous;

function parser(global, lineNumber, line, previousLine, nextLine) {
  var column = getIndent(line);
  previous = previous || global;

  // Do something on forced lexicon
  if (global.lexicon) {
    var lex = global.lexicon;
    var matched = [line.trim()];

    setProperties(lex, {
      line: lineNumber,
      content: line.trim(),
      previous: previous,
      next: nextLine,
      column: column,
      match: matched
    });

    global.rules.push(lex);


    previous && previous.column < lex.column && previous.enter && previous.enter();
    previous && previous.column > lex.column && previous.leave && previous.leave();

    previous = lex.parse(global);

    process.__verbose && logSuccess(lex);

    return global;
  }

  // Walk lexicons definitions
  for (var i = 0, len = lexicons.length; i < len; i++) {
    var Lexicon = lexicons[i];
    var def = Lexicon.def;

    matched = line.trim().match(def);

    var onMatched = Lexicon.matched ? Lexicon.matched(line.trim()) : true;

    if (matched && onMatched) {
      lex = new Lexicon(global);
      lex.init && lex.init();

      setProperties(lex, {
        line: lineNumber,
        content: line.trim(),
        previous: previous,
        next: nextLine,
        column: column,
        match: matched
      });

      global.rules.push(lex);

      if (previous.column < lex.column) {
        lex.parent = previous;
      } else if (previous.column === lex.column) {
        lex.parent = previous.parent || previous;
      } else {
        lex.parent = global.indexes[lex.column].parent;
      }

      global.indexes[lex.column] = lex;

      previous && previous.column < lex.column && previous.enter && previous.enter();
      previous && previous.column > lex.column && previous.leave && previous.leave();

      previous = lex.parse(global);

      // process.__verbose && logSuccess(lex);

      break;
    }
  }

  if (!matched) {
    // todo warning if not exist
    // process.__verbose && logSuccess(lex);
  }

  return global;
}

module.exports = parser;
