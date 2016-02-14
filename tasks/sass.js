var gulp      = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');

var config = require('../config');


var optimizeConfig = config.optimize.css;

var sassConfig = config.sass;

gulp.task('sass', function () {
    gulp.src(sassConfig.src)
        .pipe(plumber())
        .pipe(sass(sassConfig.options))
        .pipe(autoprefixer(sassConfig.prefixer))
        .pipe(gulp.dest(sassConfig.dest));
});

gulp.task('sass-optimize', function () {
    gulp.src(sassConfig.src)
        .pipe(plumber())
        .pipe(sass(sassConfig.options))
        .pipe(autoprefixer(sassConfig.prefixer))
        .pipe(minifycss(optimizeConfig.options))
        .pipe(gulp.dest(sassConfig.dest))
        .pipe(size());
});
