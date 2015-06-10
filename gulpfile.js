/**
 * Gulpfile
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var gutil      = require('gulp-util');
var requireDir = require('require-dir');

// Catch errors
var gulp_src = gulp.src;

gulp.src = function() {

  return gulp_src.apply(gulp, arguments)

    .pipe(plumber(function(error) {
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      this.emit('end');
    })
  );

};

// Load all tasks
var tasks = requireDir('./gulp_tasks');
