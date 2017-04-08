var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('src/css/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('src/css/*.scss', ['sass']);
})

gulp.task('build', function() {
  //build and optimize files for production
  //pipe to dist directory
})
