var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js", // prepend with [chunkhash] to get a hash
        publicPath: "/assets/",
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
                loaders: ExtractTextPlugin.extract({fallbackLoader:'style-loader', loader:'css-loader!sass-loader'})
            }
        ]
    },
    devServer: {
        contentBase: "dist/"
    },
    devtool: 'inline-source-map',
};

module.exports = config;