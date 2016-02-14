var gulp      = require('gulp');
var jade = require('gulp-jade');
var htmlmin = require('gulp-htmlmin');
var size     = require('gulp-size');
var plumber = require('gulp-plumber');

var config    = require('../config');

var optimizeConfig  = config.optimize.html;
var jadeConfig = config.jade || config.pug;

gulp.task('jade', function() {
    gulp.src(jadeConfig.src)
        .pipe(plumber())
        .pipe(jade(jadeConfig))
        .pipe(gulp.dest(jadeConfig.dest));
});

gulp.task('jade-optimize', function() {
    gulp.src(jadeConfig.src)
        .pipe(plumber())
        .pipe(jade(jadeConfig))
        .pipe(htmlmin(optimizeConfig.options))
        .pipe(gulp.dest(jadeConfig.dest))
        .pipe(size());
});
