var gulp = require('gulp');
var stylus = require('gulp-stylus');

var autoprefixer = require('autoprefixer-stylus');
var axis = require('axis');
var jeet = require('jeet');
var nib = require('nib');
var rupture = require('rupture');
var typographic = require('typographic');

var stylSrc = './assets/stylus/style.styl';

gulp.task('compile', function () {
  gulp.src(stylSrc)
    .pipe(stylus({
      use: [
        autoprefixer(),
        axis(),
        jeet(),
        nib(),
        rupture(),
        typographic(),

      ],
      compress: false
    }))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
  gulp.watch(stylSrc, ['compile'])
});

gulp.task('default', ['compile', 'watch']);

// https://github.com/mojotech/jeet/tree/master/stylus