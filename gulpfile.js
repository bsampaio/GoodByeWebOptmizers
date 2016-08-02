var gulp = require('gulp');

//IMAGES
var webp = require('gulp-webp');
var imagemin = require('gulp-imagemin');
var imageminPngQuant = require('imagemin-pngquant');
var imageminJpegtran = require('imagemin-jpegtran');

//Doesn't work:
// var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminZopfli = require('imagemin-zopfli');
var imageminPngout = require('imagemin-pngout');
var imageminMozjpeg = require('imagemin-mozjpeg');

var path = {
    //webp: ['img/*.jpg', 'img/*.png', 'img/*.tiff'],
    images: ['img/**/*'],
};

gulp.task('images', [],function() {
    
    //Compress and optimize images
    return gulp.src(path.images)
        .pipe(imagemin([
              imageminMozjpeg({
                'quality' : '80',
                'quantTable': 2
              }),
              imageminPngQuant({
                'quality': '65-80'
              }),
              imagemin.svgo(),
              imagemin.gifsicle()
            ],
            {
              optimizationLevel: 3,
              progressive: true,
              interlaced: true,
            })
        )
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', [
    'images',
]);