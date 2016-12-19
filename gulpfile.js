var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    cssbeautify = require('gulp-cssbeautify'),
    cssmin      = require('gulp-cssmin'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    autoprefix  = require('gulp-autoprefixer');

gulp.task('default', ['serve']);

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("src/sass/*.scss", ['sass']);
  gulp.watch("src/js/*.js", ['js']).on('change', browserSync.reload);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/sass/*.scss")
    .pipe(sass())
    .pipe(autoprefix({
      browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(cssbeautify())
    .pipe(gulp.dest("dist/css"))
    .pipe(gulp.dest("demo/css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});


gulp.task('js', function() {
  return gulp.src("src/js/*.js")
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('demo/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});


