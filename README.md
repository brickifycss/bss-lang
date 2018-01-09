# Brick stylesheets

BSS lang is a fast CSS preprocessor written in JavaScript.
<br>
It comes with is own meta language.
<br>
Can be easly extended to add rules and parse/extend others preprocessor such as SASS, STYLUS, LESS, POSTCSS...


***!!! WORK IN PROGRESS, POC STATE !!! DOES NOT USE IT IN PRODUCTION ***

# CORE

BSS core only support basic CSS behavior.
<br>
If you wants to support nested, variables..., you should import new lexicon and plugin.

# How to use?

``` 
git clone git@github.com:brickifycss/bss-lang.git 
cd bss-lang

node example

```

# Lexicon / Dictionnary

## List of core lexicons

## Write a Lexicon or extend/override

## List of plugins
 
# TOOLS

* CSS validation
* CSS optimization
* CSS vendors
* CSS gzip

# Resources
* https://www.w3.org/TR/CSS2.1/grammar.html
* https://www.w3.org/TR/css-syntax-3/
* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference


# TODO
* major refactoring, clean code, comment code
* Documentation
* Tests
* Coverage
* Benchmarks
* SASS comparion syntax
* hooks / middleware (middleware and hooks from brickify)
* global hooks (onInit,onRegister, onParse, onEnter,onLeave, onTranspile, onMatched, onStart, onEnd) (useful to apply plugin in plugin/lexicon)
* Error management 
* Cache management
* Source maps
* verbose, CLI
* Separate plugins and lexicons in their own repository
* CSS Block plugin / Write CSS, Sass Block plugin, Scss Block plugin
* Other plugins, mixins, placeholder, function, operators, others directives (if...)
* ...          
