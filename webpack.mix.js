const mix = require('laravel-mix');

mix.setPublicPath('./')
   .js('resources/js/app.js', 'assets/js')
   .sass('resources/sass/app.scss', 'assets/css')
   .version()
   .browserSync(); // Hot reloading