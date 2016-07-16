var path = require('path')
var through = require('through2')
var recast = require('recast')
var transformer = require('./transformer.js')

module.exports = function (file) {
  var isJSON = path.extname(file) === '.json'
  var buffers = []

  return through(
    function (chunk, enc, done) {
      if (isJSON) {
        this.push(chunk)
        return done()
      }
      buffers.push(chunk)
      done()
    },
    function (done) {
      if (isJSON) return done()
      var source = Buffer.concat(buffers).toString().replace(/process\.browser/g, 'true')
      this.push(recast.print(transformer(recast.parse(source))).code)
      done()
    }
  )
}
