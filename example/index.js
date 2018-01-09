'use strict';

var fs = require('fs');

var BSS = require('../lib/index');

var content = fs.readFileSync(__dirname + '/styles.bss', 'utf8');

new BSS(content, {
  plugins: [
    require('../lib/_plugins/bss-import'),
    require('../lib/_plugins/directive-mixin'),
    require('../lib/_plugins/variable'),
    require('../lib/_plugins/extend'),
    require('../lib/_plugins/nested-selector'),
    require('../lib/_plugins/nested-properties'),
    require('../lib/_plugins/selector-parent'),
    require('../lib/_plugins/interpolation')
  ]
});
