var gulp = require('gulp');
var webpack = require('webpack-stream');
var serve = require('gulp-serve');

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'));
});

// Web Server
gulp.task('serve:web', serve({
  root: ['.'],
  port: 8000
}));

gulp.task('default', ['webpack', 'serve:web']);