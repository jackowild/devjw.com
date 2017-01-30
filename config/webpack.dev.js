var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = function () {
  return webpackMerge(commonConfig, {});
}