'use strict';

function onParsed() {
  if (process.__verbose) {
    console.log('Content parsed');
  }
}

module.exports = onParsed;
