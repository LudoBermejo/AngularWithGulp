// gulp
var gulp = require('gulp');

// plugins
var plugins = require('gulp-load-plugins')();

gulp.task('lint', require('./gulp-tasks/lint')(gulp, plugins));
gulp.task('clean', require('./gulp-tasks/clean')(gulp, plugins));
gulp.task('minify-css', require('./gulp-tasks/minify-css')(gulp, plugins));
gulp.task('minify-js', require('./gulp-tasks/minify-js')(gulp, plugins));
gulp.task('copy-bower-components', require('./gulp-tasks/copy-bower-components')(gulp, plugins));
gulp.task('copy-html-files', require('./gulp-tasks/copy-html-files')(gulp, plugins));
gulp.task('connect', require('./gulp-tasks/connect')(gulp, plugins));
gulp.task('connect-dist', require('./gulp-tasks/connect-dist')(gulp, plugins));

// default task
gulp.task('default',
  ['lint', 'connect']
);

// build task
gulp.task('build',
  ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connect-dist']
);