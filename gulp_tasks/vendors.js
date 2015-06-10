/**
 * Task: Vendors
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp = require('gulp');
var copy = require('gulp-copy');

// Task
gulp.task('vendors', function() {

  return gulp.src('./source/vendors/**/*', {
      dot: true
    })

  // Copy vendors
    .pipe(copy('./build/', {
      prefix: 1
    }));

});
