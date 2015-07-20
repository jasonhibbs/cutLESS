var gulp = require('gulp'),
less = require("gulp-less"),
autoprefixer = require("gulp-autoprefixer"),
minifyCss = require("gulp-minify-css");

var resources = "resources/";
var paths = {

  input_less: [
    resources + 'less/style.less'
  ],
  watch_less: [
    resources + 'less/*.less'
  ],
  output_css: resources + 'css',
};

gulp.task('compile-less', function () {
  gulp.src(paths.input_less) // path to your file
  .pipe(less().on('error', console.error.bind(console)))
  .pipe(autoprefixer({
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
    cascade: false,
    remove: false
  }))
  .pipe(minifyCss({
    keepBreaks: true,
    processImport: false
  }))
  .pipe(gulp.dest(paths.output_css));
});


gulp.task('watch', function() {
  gulp.watch(paths.watch_less, ['compile-less']);
});

gulp.task('default', ['watch', 'compile-less']);