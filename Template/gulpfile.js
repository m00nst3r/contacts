var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('less', function(){
    gulp.src('scss/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
    watch(['scss/*.scss'], function(){
        gulp.start('less');
    })
});

gulp.task('compress:css', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('compress:image', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('compress:assets', function () {
    return gulp.src('assets/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/assets/'))
});

gulp.task('compress:js', function () {
    gulp.src('js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('build', ['compress:css', 'compress:image', 'compress:js', 'compress:assets', 'html']);

gulp.task('default', ['watch']);