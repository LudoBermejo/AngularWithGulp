
module.exports = function(gulp, plugins) {

	return function() {
		    gulp.src('./dist/*')
      		.pipe(plugins.clean({force: true}));
	}
}
