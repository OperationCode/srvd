(function(require) {
  'use strict';
    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var browserSync = require('browser-sync');
    var reload = browserSync.reload;

    gulp.task('styles', styles);
    gulp.task('scripts', scripts);
    gulp.task('fonts', fonts);
    gulp.task('images', images);
    gulp.task('build', ['scripts', 'styles', 'fonts', 'images'], function(){});
    gulp.task('serve', ['build'], serve);
    gulp.task('default', ['serve'], function (){});

  // Styles ------------------------------------------------------------

  function styles() {
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

	function scripts() {
    return gulp.src('app/scripts/**/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/scripts/'))
      .pipe(reload({stream: true}));
  }

  // Fonts -----------------------------------------------------------

  function fonts() {
    return gulp.src('app/assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts'))
    .pipe(reload({stream: true}));
  }

  // Images -----------------------------------------------------------

  function images() {
    return gulp.src('app/assets/images/**/*')
    .pipe(gulp.dest('dist/assets/images'))
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

    gulp.watch('app/stylesheets/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/assets/fonts/**/*', ['fonts']);
    gulp.watch('app/assets/images/**/*', ['images']);
  }

})(require);
