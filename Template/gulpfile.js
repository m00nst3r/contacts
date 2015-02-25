var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('less', function(){
    gulp.src('scss/index.scss')
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
    watch(['scss/*.scss'], function(){
        gulp.start('less');
    })
});

gulp.task('build', ['less']);

gulp.task('default', ['watch']);