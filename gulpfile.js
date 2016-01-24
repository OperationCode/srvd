(function(require) {
  'use strict';
    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var browserSync = require('browser-sync');
    var reload = browserSync.reload;

    gulp.task('compile:styles', compileStyles);
    gulp.task('compile:scripts', compileScripts);
    gulp.task('build', ['compile:scripts', 'compile:styles'], function(){});
    gulp.task('serve', ['build'], serve);
    gulp.task('default', ['serve'], function (){});

  // Styles ------------------------------------------------------------

  function compileStyles() {
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');

    return gulp.src('app/stylesheets/application.scss')
      .pipe(sass({
        outputStyle: 'compressed',
        precision: 10,
        includePaths: ['.']
      }).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(concat('main.css'))
      .pipe(gulp.dest('dist/stylesheets/'))
      .pipe(reload({stream: true}));
  }

  // Scripts -----------------------------------------------------------

	function compileScripts() {
    return gulp.src('app/scripts/**/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/scripts/'))
      .pipe(reload({stream: true}));
  }

  // Serve ------------------------------------------------------------

  function serve() {
    browserSync({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['./']
      }
    });

    // watch for changes
    gulp.watch([
      '*.html',
      'app/scripts/**/*.js'
    ]).on('change', reload);

    gulp.watch('app/stylesheets/**/*.scss', ['compile:styles']);
    gulp.watch('app/scripts/**/*.js', ['compile:scripts']);
  }

})(require);
