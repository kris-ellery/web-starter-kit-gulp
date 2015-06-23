/**
 * Task: Assets
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var minimist    = require('minimist')
var copy        = require('gulp-copy');
var imagemin    = require('gulp-imagemin');
var runSequence = require('run-sequence');

// Build options
var options = minimist(process.argv.slice(2), {
  string: [ 'env' ],
  default: {
    env: 'dev'
  }
});

// Task
gulp.task('assets', function(cb) {

  // Run tasks synchronously
  return runSequence(
    [ 'data' ],
    [ 'fonts' ],
    [ 'images' ],
    [ 'media' ],
    [ 'misc' ],
    [ 'vendors' ],
    cb
  );
});

// Data
gulp.task('data', function() {

  return gulp.src('./source/data/**/*')

    // Copy data
    .pipe(copy('./build/', {
      prefix: 1
    }));

});

// Fonts
gulp.task('fonts', function() {

  return gulp.src('./source/fonts/**/*')

    // Copy fonts
    .pipe(copy('./build/', {
      prefix: 1
    }));

});

// Images
gulp.task('images', function () {

  return gulp.src('./source/images/**/*')

    // Optimize images
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }))

    // Save optimized images
    .pipe(gulp.dest('./build/images/'));

});

// Media
gulp.task('media', function() {

  return gulp.src('./source/media/**/*')

    // Copy media
    .pipe(copy('./build/', {
      prefix: 1
    }));

});

// Misc
gulp.task('misc', function() {

  return gulp.src([
      './source/misc/' + options.env + '/**/*',
      './source/misc/all/**/*'
    ], {
      dot: true
    })

    // Copy miscellaneous files
    .pipe(copy('./build/', {
      prefix: 3
    }));

});

// Vendors
gulp.task('vendors', function() {

  return gulp.src('./source/vendors/**/*')

  // Copy vendors
    .pipe(copy('./build/', {
      prefix: 1
    }));

});
