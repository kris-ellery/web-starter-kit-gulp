/**
 * Task: Media
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp = require('gulp');
var copy = require('gulp-copy');

// Task
gulp.task('media', function() {

  return gulp.src('./source/media/**/*')

    // Copy media
    .pipe(copy('./build/', {
      prefix: 1
    }));

});
