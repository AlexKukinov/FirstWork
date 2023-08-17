const {src , dest , watch , parallel} = require('gulp');

const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');



function browsersync(){
  browserSync.init({
    server: { 
      baseDir: "./"
    }
  });
}





function watching (){
  // watch(['app/scss/*scss'], styles);
  // watch(['app/js/*.js', '!public/js/main.min.js'], scripts);
  watch(['./*html']).on('change', browserSync.reload);
}


exports.watching = watching; 
exports.browsersync = browsersync;




exports.default = parallel( browsersync, watching);

