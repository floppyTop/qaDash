// Gulpfile

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var connect = require('gulp-connect');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');


var uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('scripts/*.js').pipe(uglify()).pipe(concat('script.js')).pipe(gulp.dest('assets'))
});

gulp.task('copy', function() {
  gulp.src('index.html')
});

gulp.task('log', function() {
  gutil.log('== My Log Task ==');
});

gulp.task('views', function buildHTML() {
  gulp.src('./views/index.pug').pipe(pug({pretty: true})).pipe(gulp.dest('./'))
});

gulp.task('sass', function() {
  gulp.src('src/*.scss').pipe(sass({style: 'expanded'})).on('error', gutil.log).pipe(gulp.dest('src'))
});

gulp.task('coffee', function() {
  gulp.src('./scripts/*.coffee').pipe(coffee({bare: true})).on('error', gutil.log).pipe(gulp.dest('scripts'))
});

gulp.task('webserver', function() {
  gulp.src('./').pipe(webserver({
    livereload: true,
    root: '/index.html',
    fallback: 'index.html',
    port: 8888,
  }));
});

gulp.task('compilify', ['coffee', 'js']);

gulp.task('watch', function() {
  gulp.watch('src/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.sever({root: '.', livereload: true, enable: true})
});

gulp.task('default', ['sass', 'watch']);
