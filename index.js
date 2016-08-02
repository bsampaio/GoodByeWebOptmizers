const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

imagemin(['img/test/*.jpg'], 'dist/img', {
    plugins: [
        imageminJpegRecompress()
    ]
})
.catch((e) => {
	console.log("Error" + e);
})
.then(() => {
    console.log('Images optimized');
});

console.log('Runs.');