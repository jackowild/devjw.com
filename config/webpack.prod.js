var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    output: {
        filename: "[chunkhash].[name].bundle.js",
    }
});