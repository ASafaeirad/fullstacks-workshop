const gulp = require('gulp');
const plumber = require('gulp-plumber');
const through = require('through2');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const gulpWatch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');
const filter = require('gulp-filter');
const { Signale, chalks } = require('@frontendmonster/dev-utils/logger');

const gulpLogger = Signale('gulp');
const source = './src/**/*.js';

const compilationLogger = () => through.obj((file, _, callback) => {
  gulpLogger.success(`Compiling '${chalks.processing(file.relative)}'...`);
  callback(null, file);
});

const logErrors = () => plumber({
  errorHandler(err) {
    gulpLogger.error(err.stack);
  },
});

const build = () => gulp
  .src(source)
  .pipe(filter(['**', '!**/*.test.js']))
  .pipe(logErrors())
  .pipe(newer({ dest: './dist' }))
  .pipe(compilationLogger())
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist'));

const watch = () => gulpWatch(source, { debounceDelay: 200 }, gulp.task('build'));

const startServer = () => nodemon();

gulp.task('start', startServer);

gulp.task('build', build);

gulp.task('watch', watch);

gulp.task('build:watch', gulp.series('build', 'watch'));

gulp.task('dev', gulp.series('build', gulp.parallel('start', watch)));

gulp.task('default', gulp.series('build'));
