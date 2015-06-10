/**
 * Task: Build
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Task
gulp.task('build', function(cb) {

  // Run tasks synchronously
  return runSequence(
    [ 'clean' ],
    [ 'data' ],
    [ 'fonts' ],
    [ 'images' ],
    [ 'media' ],
    [ 'misc' ],
    [ 'scripts' ],
    [ 'styles' ],
    [ 'vendors' ],
    [ 'views' ],
    cb
  );
});
