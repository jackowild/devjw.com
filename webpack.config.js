var webpack = require('webpack');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './app.module.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js" // prepend with [chunkhash] to get a hash
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(["vendor"])
    ]
};

module.exports=config;