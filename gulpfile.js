const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');

const source = 'src';
const dist = 'dist';
const paths = [`${source}/**/*.ts`, `${source}/*.ts`];

gulp.task('tsc', () => {
  const project = ts.createProject('tsconfig.json');
  const stream = gulp
    .src(paths, { base: `./${source}` })
    .pipe(sourcemaps.init())
    .pipe(project())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist));
  return stream;
});

gulp.task('serve', ['tsc'], () => {
  const stream = nodemon({
    script: 'dist/app.js',
    env: { NODE_ENV: 'local' },
    watch: ['dist/**'],
    quiet: true,
    delay: 0.3
  });
  return stream;
});

gulp.task('watch', ['tsc'], () => {
  gulp.watch(paths, ['tsc']);
});

gulp.task('default', ['serve'], () => {
  gulp.watch(paths, ['tsc']);
});
