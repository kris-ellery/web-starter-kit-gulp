/**
 * Task: Server
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp  = require('gulp');
var watch = require('gulp-watch');
var bs    = require("browser-sync").create();

// Task
gulp.task('server', function() {

  // Start BrowserSync server
  bs.init({
    notify: false,
    server: './build',
    open: 'local',
    ui: false
  });

  bs.watch('build/**/*').on('change', bs.reload);

  gulp.watch('./source/data/**/*', [ 'data' ]);
  gulp.watch('./source/fonts/**/*', [ 'fonts' ]);
  gulp.watch('./source/images/**/*', [ 'images' ]);
  gulp.watch('./source/media/**/*', [ 'media' ]);
  gulp.watch('./source/misc/**/*', [ 'misc' ]);
  gulp.watch('./source/scripts/**/*', [ 'scripts' ]);
  gulp.watch('./source/styles/**/*', [ 'styles' ]);
  gulp.watch('./source/vendors/**/*', [ 'vendors' ]);
  gulp.watch('./source/views/**/*', [ 'views' ]);

});
