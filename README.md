#isbrowser

A browserify transform to remove server-side code.

[![npm](https://img.shields.io/npm/dm/isbrowser.svg)](https://www.npmjs.com/package/isbrowser)

# What
I needed a convenient way to implement server-side only code within my current browserify processes and didn't like the other available options.
This will transform "process.browser" into "true" and then statically evaluate all conditional expressions.

# Installation

#### Npm
```console
npm install isbrowser
```

# Usage
```console
browserify input.js -t isbrowser -o output.js
```

# Example Input
```javascript
var env;

if (process.browser) {
    env = 'browser';
} else {
    env = 'node';
}

env = process.browser ? 'browser' : 'node';

env = process.browser && 'browser';

env = process.browser || 'server';
```

# Example Output
```javascript
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var env;

{
    env = 'browser';
}

env = 'browser';

env = 'browser';

env = true;
},{}]},{},[1])
```
