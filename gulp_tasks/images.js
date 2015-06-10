/**
 * Task: Images
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// Task
gulp.task('images', function () {

  return gulp.src('./source/images/**/*')

    // Optimize images
    .pipe(imagemin({
      optimizationLevel: 4,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [
        pngquant()
      ]
    }))

    // Save optimized images
    .pipe(gulp.dest('./build/images/'));

});
