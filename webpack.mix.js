const { mix } = require('laravel-mix');

mix.js('./js/app.js', 'public/app.js')
   .sass('./sass/app.scss', 'public/app.css');
