/**
 * Task: Clean
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp = require('gulp');
var del  = require('del');

// Task
gulp.task('clean', function() {

  // Delete `build` directory
  return del('./build/');
});
