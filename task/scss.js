import gulp from'gulp';

// Плагины
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer'; 
import groupmedia from 'gulp-group-css-media-queries';
import gulpsass from 'gulp-sass';
import cssmin from 'gulp-csso';
import * as dartSass from 'sass';
import plumber from 'gulp-plumber';

const sass = gulpsass(dartSass);

// Конфигурация
import path from  '../config/path.js';
import app from '../config/app.js';

// Обработка SCSS 
const scss = () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'SCSS',
            message: err.message
        }))
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(groupmedia())
    .pipe(cssmin())
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
}

export default scss;