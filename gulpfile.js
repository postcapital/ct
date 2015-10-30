
var isProduction = false;
var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    //autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    //jshint = require('gulp-jshint'),
    //uglify = require('gulp-uglify'),
    //imagemin = require('gulp-imagemin'),
    //rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    // notify = require('gulp-notify'),
    // cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    sequence = require('run-sequence');

// Builds your entire app once, without starting a server
gulp.task('build', function(cb) {
  sequence('clean', ['copy', 'sass','server'], cb);
});

gulp.task('sass', function() {

  return gulp.src('client/assets/scss/foundation.scss')
    .pipe(sass({
      includePaths: ['bower_components/foundation/scss'],
      outputStyle: (isProduction ? 'compressed' : 'nested'),
      errLogToConsole: true
    }))
    .pipe(gulp.dest('client/dist/css/'))
  ;
});

gulp.task('scripts', function() {
  return;
});

gulp.task('default', ['server'], function() {
  gulp.start('sass', 'scripts');
});

/*
gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('client/dist/js/'));
});*/

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('client/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('client/*.js', ['scripts']);
});

gulp.task('watch', function() {

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['client/dist/**']).on('change', livereload.changed);

});

gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js'], cb)
});

// Starts a test server, which you can view at http://localhost:8000
gulp.task('server', function() {
  gulp.src('build')
    .pipe(webserver({
      port: 8000,
      host: 'localhost',
      directoryListing: true,
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});

