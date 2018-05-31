//github.com/zellwk/gulp-starter-csstricks

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  useref = require("gulp-useref"),
  uglify = require("gulp-uglify"),
  gulpIf = require("gulp-if"),
  cssnano = require("gulp-cssnano"),
  imagemin = require("gulp-imagemin"),
  cache = require("gulp-cache"),
  addsrc = require("gulp-add-src"),
  minifyCSS = require("gulp-minify-css"),
  del = require("del"),
  runSequence = require("run-sequence");

// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Zell!');
})

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass', function() {
  return (
    gulp
      .src("app/scss/**/*.scss") // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass().on("error", sass.logError)) // Passes it through a gulp-sass, log errors to console
      .pipe(minifyCSS())
     // .pipe(addsrc.prepend("node_modules/bootstrap/dist/css/bootstrap.css"))
      .pipe(gulp.dest("app/css")) // Outputs it in the css folder
      .pipe(browserSync.reload({ // Reloading with Browser Sync
          stream: true }))
  );
})

/**
 * Minify and combine JS files, including jQuery and Bootstrap
 */
gulp.task('scripts', function () {
  gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/js/**/*.js'
  ])
    //.pipe(uglify())
    //.pipe(concat('script.js'))
    .pipe(gulp.dest('app/js'));
});


// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch("app/css/*.css", browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {

  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )
})
