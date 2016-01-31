
var isProduction = false;
var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    //autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    //jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
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
  sequence('clean', ['clean', 'copy', 'sass','server'], cb);
});

gulp.task('sass', function(cb) {

  gulp.src('assets/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed',
      includePaths: ['bower_components/foundation-sites/scss/',
      'bower_components/motion-ui/' ],
      errLogToConsole: true }))
    .pipe(gulp.dest('client/dist/css'));

  // Font Awesome fonts
  gulp.src('bower_components/font-awesome/fonts/fontawesome-webfont.*')
     .pipe(gulp.dest('client/dist/fonts/')); 
  cb(); 
});

gulp.task('js', function() {
  gulp.src(['bower_components/angular/angular.min.js',
            'bower_components/ag-grid/dist/ag-grid.min.js',
            'bower_components/ngDraggable/ngDraggable.js',
            ])
    .pipe(gulp.dest('client/dist/js'))
});

gulp.task('scripts', function() {
  return;
});

gulp.task('default', function() {
  gulp.start('start');
});

gulp.task('start', function() {
  gulp.start('sass', 'js', 'server');
});

gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('client/dist/js/'));
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('assets/scss/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('*.js', ['scripts']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['client/dist/**']).on('change', livereload.changed);

});

gulp.task('clean', function(cb) {
    del(['client/dist'], cb)
});

// Starts a test server, which you can view at http://localhost:8000
gulp.task('server', function() {
  gulp.src('client/')
    .pipe(webserver({
      port: 8000,
      host: 'localhost',
      directoryListing: false,
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});

