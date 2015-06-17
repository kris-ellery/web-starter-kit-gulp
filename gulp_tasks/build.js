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

  // Remove build
  del('./build/');

  // Run tasks synchronously
  return runSequence(
    [ 'assets' ],
    [ 'scripts' ],
    [ 'styles' ],
    [ 'views' ],
    cb
  );
});
