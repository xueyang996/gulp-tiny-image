import gulp from "gulp";
var plumber = require("gulp-plumber");
var tinypng = require("gulp-tinypng-extended");

export default () =>
  gulp
    .src("images/**/*")
    .pipe(plumber())
    .pipe(
      tinypng({
        key: "767qZvYcnBVPZ51lMscPRxpdh36pQJmM",
        log: true,
      })
    )
    .pipe(gulp.dest("dist/images"));
