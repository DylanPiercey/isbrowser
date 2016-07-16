var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

/**
 * Build js.
 */
gulp.task('build', function () {
    return browserify({entries: './test/main.js', debug: true})
        .transform(require('./lib'))
        .bundle()
        .on('error', function (err) {
            console.log(err.toString());
            console.log(err.stack);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./test'));
});
