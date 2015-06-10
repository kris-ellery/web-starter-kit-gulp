/**
 * Task: Fonts
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp = require('gulp');
var copy = require('gulp-copy');

// Task
gulp.task('fonts', function() {

  return gulp.src('./source/fonts/**/*')

    // Copy fonts
    .pipe(copy('./build/', {
      prefix: 1
    }));

});
