var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var size     = require('gulp-size');
var config  = require('../../config').optimize.html;

/**
 * Minimize HTML
 */
gulp.task('optimize:html', function() {
    return gulp.src(config.src)
        .pipe(htmlmin(config.options))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});
