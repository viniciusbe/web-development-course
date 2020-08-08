const { series,parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const uglifyhtml = require('gulp-htmlmin')
const concat = require('gulp-concat')

function tranformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))

}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(uglifyhtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('build'))
}
exports.default = parallel(tranformacaoCSS,copiarHTML)