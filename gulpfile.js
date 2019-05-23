const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();


function build(callback) {
	gulp.src('sass/style.scss')
		.pipe($.plumber())
		.pipe($.sass({
			// includePaths : [require("bourbon").includePaths],
			// [outputStyle] Type: String Default: nested Values: nested, expanded, compact, compressed
			outputStyle  : 'compressed',
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer({
			browsers: ['last 1 versions']
		}))
		.pipe(gulp.dest('./public/css'))
	callback()
}


function watch(callback) {
	gulp.watch('sass/**/*.scss', build)
}


gulp.task(watch)

gulp.task('default', (callback) => {
	build(() => {
		callback()
	})
})
