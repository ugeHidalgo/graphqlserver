'use strict';

// Include gulp
var _ = require('lodash'),
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');;

// Develop task with nodemon to relaunch when changes in files.
gulp.task('develop', function(){
    nodemon({
      script: './server.js',
      env: { 'NODE_ENV': 'development' },
      ignore: ['public/dist/']
    })
});

// Lint JS server side files.
gulp.task('lint', function() {
  var serverJsFiles = [
        'server.js',
        './src/**/*.js' ],

      assets = _.union (
        serverJsFiles
        //clientJsFiles
      )

  return gulp.src(assets)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

// Default Task
gulp.task('default', ['develop', 'lint']);
