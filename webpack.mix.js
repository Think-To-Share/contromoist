let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */


mix.js('src/js/app.js', 'dist/js')
   .sass('src/scss/app.scss', 'dist/css')
   .setPublicPath('dist');

mix.setResourceRoot('../');

mix.webpackConfig(webpack => {
   return {
       plugins: [
           new webpack.ProvidePlugin({
               $: 'jquery',
               jQuery: 'jquery',
               'window.jQuery': 'jquery'
           })
       ]
   };
});
