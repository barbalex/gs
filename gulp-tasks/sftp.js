/**
 * beamt die Dateien aus dem public-Ordner nach gabriel-software.ch/public
 */

'use strict'

var gulp = require('gulp'),
  sftp = require('gulp-sftp'),
  sftpPass = require('../sftpPass.json')

gulp.task('sftp', function () {
  return gulp.src('public/**')
    .pipe(sftp({
      host: 'gabriel-software.ch',
      port: 30000,
      remotePath: 'public',
      user: sftpPass.user,
      pass: sftpPass.pass
    }))
})
