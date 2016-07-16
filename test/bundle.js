(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var env
var details = require('../package.json')

{
  env = 'browser'
}

env = 'browser'

env = 'browser'

env = true

},{"../package.json":2}],2:[function(require,module,exports){
module.exports={
  "name": "isbrowser",
  "description": "A browserify transform to remove server-side code.",
  "devDependencies": {
    "browserify": "^9.0.3",
    "gulp": "^3.9.1",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0"
  },
  "version": "0.1.0",
  "author": "Dylan Piercey <pierceydylan@gmail.com>",
  "bugs": "https://github.com/DylanPiercey/isbrowser/issues",
  "homepage": "https://github.com/DylanPiercey/isbrowser",
  "keywords": [
    "browserify",
    "transform",
    "isomorphic",
    "universal",
    "is-browser",
    "browser",
    "rill"
  ],
  "license": "MIT",
  "main": "lib/index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/DylanPiercey/isbrowser"
  },
  "dependencies": {
    "esmangle-evaluator": "^1.0.1",
    "recast": "^0.11.10",
    "through2": "^2.0.1"
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZXN0L21haW4uanMiLCJwYWNrYWdlLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBlbnZcbnZhciBkZXRhaWxzID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcblxue1xuICBlbnYgPSAnYnJvd3Nlcidcbn1cblxuZW52ID0gJ2Jyb3dzZXInXG5cbmVudiA9ICdicm93c2VyJ1xuXG5lbnYgPSB0cnVlXG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcImlzYnJvd3NlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBicm93c2VyaWZ5IHRyYW5zZm9ybSB0byByZW1vdmUgc2VydmVyLXNpZGUgY29kZS5cIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl45LjAuM1wiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwidmlueWwtYnVmZmVyXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMS4wXCJcbiAgfSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcbiAgXCJhdXRob3JcIjogXCJEeWxhbiBQaWVyY2V5IDxwaWVyY2V5ZHlsYW5AZ21haWwuY29tPlwiLFxuICBcImJ1Z3NcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRHlsYW5QaWVyY2V5L2lzYnJvd3Nlci9pc3N1ZXNcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EeWxhblBpZXJjZXkvaXNicm93c2VyXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiYnJvd3NlcmlmeVwiLFxuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgXCJpc29tb3JwaGljXCIsXG4gICAgXCJ1bml2ZXJzYWxcIixcbiAgICBcImlzLWJyb3dzZXJcIixcbiAgICBcImJyb3dzZXJcIixcbiAgICBcInJpbGxcIlxuICBdLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJtYWluXCI6IFwibGliL2luZGV4LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRHlsYW5QaWVyY2V5L2lzYnJvd3NlclwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImVzbWFuZ2xlLWV2YWx1YXRvclwiOiBcIl4xLjAuMVwiLFxuICAgIFwicmVjYXN0XCI6IFwiXjAuMTEuMTBcIixcbiAgICBcInRocm91Z2gyXCI6IFwiXjIuMC4xXCJcbiAgfVxufVxuIl19
