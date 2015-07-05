// gulp
var gulp = require('gulp');

// plugins
var plugins = require('gulp-load-plugins')();

gulp.task('connect', require('./gulp-tasks/connect')(gulp, plugins));