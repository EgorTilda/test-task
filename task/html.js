import gulp from 'gulp';

// Плагины
import plumber  from 'gulp-plumber';
import notify from 'gulp-notify';
// import webphtml from 'gulp-webp-html';

// Конфигурация
import path from './../config/path.js';
import app from './../config/app.js';


// Обработка HTML 
const html = () => {
    return gulp.src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'HTML',
            message: err.message
        }))
    }))
    // .pipe(webphtml())
    .pipe(gulp.dest(path.html.dest));
}

export default html;