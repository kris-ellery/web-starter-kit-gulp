/**
 * Task: Build
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var del         = require('del');
var runSequence = require('run-sequence');

// Task
gulp.task('build', function(cb) {

  // Run tasks synchronously
  return runSequence(
    [ 'remove-build' ],
    [ 'assets' ],
    [ 'scripts' ],
    [ 'styles' ],
    [ 'views' ],
    cb
  );
});

// Remove build
gulp.task('remove-build', function() {
  return del('./build/');
});
