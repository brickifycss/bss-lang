'use strict';


function onTranspiled(global) {
  if (process.__verbose) {
    console.log('CSS RESULT');
  }

  console.log(global.transpiled);
}

module.exports = onTranspiled;
