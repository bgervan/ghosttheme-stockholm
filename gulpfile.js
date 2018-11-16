// Gulpfile.js running on stratumui,
// a css framework available on npmjs.com
'use strict';

var gulp = require('gulp'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify-es'),
  rename = require('gulp-rename'),
  handlebars = require('gulp-handlebars'),
  declare = require('gulp-declare'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  postcss = require('gulp-postcss'),
  precss = require('precss'),
  babel = require('gulp-babel'),
  resolveDependencies = require('gulp-resolve-dependencies'),
  livereload = require('gulp-livereload'),
  browserSync = require('browser-sync'),
  terser = require('gulp-terser'),
  imagemin = require('gulp-imagemin'),
  imageminWebp = require('imagemin-webp'),
  imageminJpegtran = require('imagemin-jpegtran'),
  fs = require('fs'),
  path = require('path');

var paths = {
  styles: {
    src: 'src/less/*.less',
    dest: 'assets/css'
  },
  scripts: {
    src: 'src/js/*.js',
    dest: 'assets/js'
  },
  html: {
    src: 'views/*.hbs',
    dest: 'assets/'
  },
  images: {
    src: '/var/www/hackers/content/images/2018/',
    dest: '/var/www/hackers/content/images/2018/'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
  //.pipe(sourcemaps.init())
    .pipe(less())
  //.pipe(sourcemaps.write('.', { sourceRoot: '/' }))
    .pipe(rename({basename: 'main', suffix: '.min'})).pipe(cleanCSS({debug: true})).pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false})).pipe(postcss([require('precss'), require('autoprefixer')])).pipe(concat('main.min.css')).pipe(gulp.dest(paths.styles.dest)).pipe(livereload()).pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.scripts.src).pipe(babel({
    presets: ['@babel/env'],
    //plugins: ['@babel/transform-runtime', '@babel/plugin-syntax-dynamic-import']
  })).on('error', console.error.bind(console)).pipe(resolveDependencies({pattern: /\* @requires [\s-]*(.*\.js)/g})).pipe(concat('main.min.js')).pipe(terser()).pipe(gulp.dest(paths.scripts.dest));
}

function templates() {
  gulp.src('views/*.hbs').pipe(handlebars())
  //.pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
    namespace: 'MyApp.templates', noRedeclare: true, // Avoid duplicate declarations
  })).pipe(concat('templates.js'))
}

function images(folder_path) {
  return gulp.src(folder_path + '/*.jpg')
  .pipe(imagemin(
    [imageminJpegtran({progressive: true})],
    {verbose: true}
  ))
  .pipe(gulp.dest(paths.images.dest));
}

function image_loop() {
  var folder_arr = []
  fs.readdir(paths.images.src, function(err, folders) {
    console.log('folders = ' + folders);
    for(var i =0; i < folders.length; i++){
      console.log(folders[i]);
      var folder_path = path.join(paths.images.src, folders[i]);
      folder_arr.push(folder_path);
    }
    for(var i =0; i < folder_arr.length; i++) {
        console.log('folder = ' + folder_arr[i]);
        images(folder_arr[i]);
    }
  });
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.styles.src).on('change', browserSync.reload);
  gulp.watch(paths.scripts.src).on('change', browserSync.reload);
}

var build = gulp.parallel(styles, scripts, image_loop);

gulp.task(build);
gulp.task('default', build);
