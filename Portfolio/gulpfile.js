const GulpClient = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const fileinclude = require('gulp-file-include');

gulp.task("sass-compile", function(){
    return gulp.src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css/"))
    
})

gulp.task('fileinclude', function() {
    return gulp.src(['./src/index.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
    });


gulp.task("watch", function(){
    gulp.watch("./src/**/*.html", gulp.series("fileinclude")),
    gulp.watch("./scss/**/*.scss", 
    gulp.series("sass-compile"))
    
})




