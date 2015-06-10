/**
 * Task: Miscellaneous
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp     = require('gulp');
var minimist = require('minimist')
var copy     = require('gulp-copy');

// Build options
var options = minimist(process.argv.slice(2), {
  string: [ 'env' ],
  default: {
    env: 'dev'
  }
});

// Task
gulp.task('misc', function() {

  return gulp.src('./source/misc/**/*', {
      dot: true
    })

    // Copy miscellaneous files
    .pipe(copy('./build/', {
      prefix: 2
    }));

});
