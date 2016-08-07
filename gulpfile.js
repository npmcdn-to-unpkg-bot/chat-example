var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

var scripts = [
    './app/js/src/script.js'
];

gulp.task('concat-scripts', function (cb) {
    pump([
        gulp.src(scripts).pipe(concat('script.min.js')),
        uglify(),
        gulp.dest('./dist/js/')
    ], cb);
});

//gulp.task('concat-react-components', function () {
//    return gulp.src('./app/js/src/components/*.js')
//        .pipe(concat('components.js'))
//        .pipe(gulp.dest('./dist/js/'));
//});


gulp.task('deploy', [
    //'concat-react-components',
    'concat-scripts'
]);