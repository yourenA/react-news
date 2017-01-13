/**
 * Created by daijiaru on 2016/10/26.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    /*entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],*/
    entry: {
        news: "./app/news.js"
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};