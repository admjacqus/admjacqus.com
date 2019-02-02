var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var autoprefixerOptions = {
  browsers: ["last 5 versions", "> 5%"]
};

gulp.task("sass", function() {
  return gulp
    .src("./scss/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"));
});

gulp.task("default", function() {
  browserSync.init({
    port: 7184,
    // https: true,
    ghostMode: false,
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
  gulp.watch("./scss/*.scss", ["sass"]);
  gulp.watch("./css/*.css").on("change", browserSync.reload);
  gulp.watch("**/*.html").on("change", browserSync.reload);
});