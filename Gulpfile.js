var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch', function () {
    gulp.watch(['./**/*.html'], ['html']);
});
gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true
    });
});


var karma = require('karma').server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

gulp.task('default', ['connect', 'watch']);
