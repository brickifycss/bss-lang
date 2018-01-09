'use strict';

var comment = require('./lexicon/comment');
var declaration = require('./lexicon/declaration');
var selector = require('./lexicon/selector');
var atImport = require('./lexicon/at-import');
var atCharset = require('./lexicon/at-charset');
var atNamespace = require('./lexicon/at-namespace');
var atMedia = require('./lexicon/at-media');
var atKeyframes = require('./lexicon/at-keyframes');
var atFontFace = require('./lexicon/at-font-face');
var atPage = require('./lexicon/at-page');

var lexicons = [
  selector,
  declaration,
  atMedia,
  atKeyframes,
  atFontFace,
  comment,
  atImport,
  atCharset,
  atNamespace,
  atPage
];

module.exports = lexicons;
