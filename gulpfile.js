// gulpの依存関係
const gulp = require("gulp");
const babel = require("gulp-babel");

// gulpのタスク
gulp.task("default", function(){
    // Nodeのソース
    gulp.src("src/**/*.js")
        .pipe(babel())
            .pipe(gulp.dest("build"));
    // ブラウザのソース
    gulp.src("public/src/**/*.js")
        .pipe(babel())
            .pipe(gulp.dest("public/build"));
});
