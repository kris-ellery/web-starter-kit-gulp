/**
 * Task: Scripts
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp    = require('gulp');
var rename  = require('gulp-rename');
var header  = require('gulp-header');
var moment  = require('moment');
var jscs    = require('gulp-jscs');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var pkg     = require('../package.json');
var banner  = '/*! <%= pkg.title %> | <%= moment().format("MMMM Do YYYY, h:mm:ss A") %> */\n';

// Task
gulp.task('scripts', function() {

  return gulp.src([
      './source/scripts/sample.js'
    ])

    // Check JSCS
    .pipe(jscs())

    // Lint JS
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))

    // Concatenate JS
    .pipe(concat('main.js'))

    // Add banner
    .pipe(header(banner, {
      pkg: pkg,
      moment: moment
    }))

    // Save uncompressed JS
    .pipe(gulp.dest('./build/scripts/'))

    // Minify JS
    .pipe(uglify({
      preserveComments: 'some'
    }))

    // Add `.min` suffix
    .pipe(rename({
      suffix: '.min'
    }))

    // Save compressed JS
    .pipe(gulp.dest('./build/scripts/'));
});
