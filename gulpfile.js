//gulpfile.js
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./'));
});