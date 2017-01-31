var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, "../dist/")
    },
    devtool: 'inline-source-map',
});