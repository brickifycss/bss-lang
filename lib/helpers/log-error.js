'use strict';

// todo message
function logError(line, lineNumber, indent) {
  console.log(lineNumber + ':' + indent + ' ' + line + ' parsed');
  // process.exit(1);
}

module.exports = logError;
