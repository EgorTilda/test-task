import gulp from 'gulp';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

// Конфигурация
import path from  '../config/path.js';
import app from '../config/app.js';

// Обработка JS
const js = () => {
    return gulp.src(path.js.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'JavaScript',
            message: err.message
        }))
    }))
    .pipe(gulp.dest(path.js.dest, {sourcemaps: app.isDev}));
}

export default js;