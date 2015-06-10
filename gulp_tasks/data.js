/**
 * Task: Data
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp = require('gulp');
var copy = require('gulp-copy');

// Task
gulp.task('data', function() {

  return gulp.src('./source/data/**/*')

    // Copy data
    .pipe(copy('./build/', {
      prefix: 1
    }));

});
