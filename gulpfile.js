  var gulp = require('gulp');
  var less = require('gulp-less');
  var path = require('path');
  var uglify = require('gulp-uglify');
  var cleanCSS = require('gulp-clean-css');
  const autoprefixer = require('gulp-autoprefixer');
 
exports.prefix = () => (
    gulp.src('./css/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./css/prefix.css'))
);

 
gulp.task('minify-css', () => {
  return gulp.src('./css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/min.css'));
});

gulp.task('less', function () {
  return gulp.src('./less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    
    .pipe(gulp.dest('./css'));
});