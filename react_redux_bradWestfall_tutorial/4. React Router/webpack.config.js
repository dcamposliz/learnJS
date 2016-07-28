var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./bundle.js",
        sourceMapFilename: "./bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },
    resolve: {
        root: path.resolve('./app'),
        extenstions: ['', '.js']
    }
}