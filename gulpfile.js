/**
 * Gulp
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var gutil       = require('gulp-util');
var requireDir  = require('require-dir');
var runSequence = require('run-sequence');

// Error handling
var gulp_src = gulp.src;

gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    // Catch errors
    .pipe(plumber(function(error) {
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      this.emit('end');
    }));
};

/**
 * Task: Default
 * --------------------------------------------------
 */

gulp.task('default', function(cb) {
  return runSequence(
    [ 'build' ],
    [ 'docs' ],
    [ 'server' ],
    cb
  );
});

// Load all tasks
var tasks = requireDir('./gulp_tasks');
