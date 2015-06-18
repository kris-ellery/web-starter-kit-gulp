/**
 * Task: Server
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync');
var path        = require('path');
var url         = require('url');
var fs          = require('fs');

// Task
gulp.task('server', function() {

  // Start BrowserSync server
  browserSync({
    notify: false,
    port: 8000,
    open: 'local',
    server: {
      baseDir: './build/',
      middleware: function (req, res, cb) {
        var uri = url.parse(req.url);

        if (uri.pathname.length > 1 &&
          path.extname(uri.pathname) === '' &&
          fs.existsSync('./build' + uri.pathname + '.html')) {
          req.url = uri.pathname + '.html' + (uri.search || '');
        }

        cb();
      }
    }
  });

  // Watch for file changes
  gulp.watch('source/data/**/*', [ 'data' ]);
  gulp.watch('source/fonts/**/*', [ 'fonts' ]);
  gulp.watch('source/images/**/*', [ 'images' ]);
  gulp.watch('source/media/**/*', [ 'media' ]);
  gulp.watch('source/misc/**/*', [ 'misc' ]);
  gulp.watch('source/scripts/**/*', [ 'scripts' ]);
  gulp.watch('source/styles/**/*', [ 'styles' ]);
  gulp.watch('source/vendors/**/*', [ 'vendors' ]);
  gulp.watch('source/views/**/*', [ 'views' ]);

  // Reload BrowserSync when build updates
  gulp.watch([ 'build/**/*', '!build/docs/**/*' ], function(file) {
    browserSync.reload(path.relative(__dirname, file.path));
  });

});
