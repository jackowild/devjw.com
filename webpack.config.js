var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './app.module.ts',
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
        })
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
        ]
    },
    devServer: {
        contentBase: "dist/"
    },
    devtool: 'inline-source-map',
};

module.exports = config;