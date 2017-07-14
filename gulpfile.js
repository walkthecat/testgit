// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var postcss = require('gulp-postcss');
//var autoprefixer = require('autoprefixer');
//var cssnext = require('postcss-cssnext');
//var shortcss = require('postcss-short');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function () {
    gulp.watch('css/*.scss', ['sass']);
});

gulp.task('losslessImagemin', function () {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, // 类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: false, // 类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, // 类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true // 类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('deepImagemin', function () {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }], // 不要移除svg的viewbox属性
            use: [pngquant()] // 使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/img'));
});

// 用到press,autoprefixer,gulp-postcss,gulp-sourcemaps
gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('precss'), require('autoprefixer')]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});
// Less configuration
// var gulp = require('gulp');
// var less = require('gulp-less');

// gulp.task('less', function() {
//     gulp.src('*.less')
//         .pipe(less())
//         .pipe(gulp.dest(function(f) {
//             return f.base;
//         }))
// });

// gulp.task('default', ['less'], function() {
//     gulp.watch('*.less', ['less']);
// })