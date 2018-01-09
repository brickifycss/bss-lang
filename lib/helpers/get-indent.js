'use strict';

function getIndent(line) {
  var indent = line.match(/^\s*/);
  return indent ? indent[0].length : 0;
}

module.exports = getIndent;
