/*
 * alex@gabriel-software.ch is managed by google
 * to verify me as account owner google62104c6b2995c087.html
 * needs to be accessible in the domain root
 */

'use strict'

var gulp = require('gulp')

gulp.task('copyGoogleVerif', function () {
  return gulp.src('./google62104c6b2995c087.html')
    .pipe(gulp.dest('public/'))
})
