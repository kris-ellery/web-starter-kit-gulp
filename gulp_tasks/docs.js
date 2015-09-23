/**
 * Task: Docs
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var shell       = require( 'gulp-shell' );
var del         = require('del');
var copy        = require('gulp-copy');
var sassdoc     = require('sassdoc');
var replace     = require('gulp-replace');
var runSequence = require('run-sequence');

// Task
gulp.task('docs', function(cb) {

  // Run tasks synchronously
  return runSequence(
    [ 'sassdoc' ],
    [ 'jsdoc' ],
    [ 'update-sassdoc-logo' ],
    [ 'update-sassdoc-nav' ],
    cb
  );
});

// Sass documentation
gulp.task('sassdoc', function() {

  var options = {
    dest: './build/docs/sass/',
    theme: require('sassdoc-theme-neat'),
    view: {
      logoPath: 'logo.png',
      library: {
        homepage: '/',
        name: 'Company Name'
      }
    }
  };

  return gulp.src('./source/styles/**/*.scss')
    .pipe(sassdoc(options));

});

// Update SassDoc logo
gulp.task('update-sassdoc-logo', function() {

  return gulp.src('./gulp_tasks/logo.png')
    .pipe(copy('./build/docs/sass/', {
      prefix: 1
    }));

});

// Update SassDoc nav
gulp.task('update-sassdoc-nav', function() {

  return gulp.src('./build/docs/sass/index.html')
    .pipe(replace(/class="social"/, 'style="display: none;"'))
    .pipe(replace(/id="footer"/, 'style="display: none;"'))
    .pipe(gulp.dest('./build/docs/sass/'));
});

// JS documentation
gulp.task('jsdoc', shell.task([
  './node_modules/.bin/jsdoc --configure ./gulp_tasks/_js-doc.json --verbose'
]));
