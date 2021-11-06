const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
    plugins: [
        new VuetifyLoaderPlugin(),
        new CaseSensitivePathsPlugin()
    ],
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]'
    }
}

mix.webpackConfig(webpackConfig);

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/auth.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/auth.scss', 'public/css');
