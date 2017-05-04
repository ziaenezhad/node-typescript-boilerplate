const gulp = require('gulp');
const tsb = require('gulp-tsb');
const del = require('del');


var sources = [
  'src/**/*.ts'
];

var output = 'dist/';

var compilerOptions = require("./tsconfig.json").compilerOptions;
var compiler = tsb.create(compilerOptions, false, false, console.error);

gulp.task('clean', () => del([output]));

gulp.task('compile', [], () => {
  return gulp.src(sources)
    .pipe(compiler())
    .pipe(gulp.dest(output));
});

gulp.task('build', ['compile'], () => {
  gulp.watch(sources, ['compile']);
});
