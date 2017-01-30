var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: path.resolve(__dirname, "../src"),
    entry: {
        app: './app',
        vendor: ['angular']
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js", // prepend with [chunkhash] to get a hash
        publicPath: "/",
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(["vendor"]),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                use: "source-map-loader"
            },
            { 
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({fallbackLoader:'style-loader', loader:'css-loader!postcss-loader!sass-loader'})
            }
        ]
    }
};

module.exports = config;