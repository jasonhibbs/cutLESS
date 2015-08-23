var gulp = require('gulp'),
    less = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer"),
    minifyCSS = require("gulp-minify-css"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var resources = "resources/";

var paths = {
  styles: {
    input: [resources + 'less/style.less'],
    watch: [resources + 'less/*.less'],
    output: resources + 'css',
  },
  scripts: [resources + 'js/plugins.js', resources + 'js/script.js'],
};

gulp.task('compile-less', function () {
  gulp.src(paths.styles.input) // path to your file
    .pipe(less().on('error', console.error.bind(console)))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
      cascade: false,
      remove: false
    }))
    .pipe(minifyCSS({
      processImport: false
    }))
    .pipe(gulp.dest(paths.styles.output));
});

gulp.task('compile-scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest(resources + 'js'));
});


gulp.task('watch', function() {
  gulp.watch(paths.styles.watch, ['compile-less']);
  gulp.watch(paths.scripts, ['compile-scripts']);
});

gulp.task('default', ['watch', 'compile-less', 'compile-scripts']);