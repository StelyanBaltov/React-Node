var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src');

const config = {
    entry: {
        main: APP_DIR + '/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
   module: {
        rules: [
        {
            test: /(\.css|.scss)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }]
            },
            {
            test: /\.(jsx|js)?$/,
            use: [{
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }
            }]
            }
        ],

    }
};

module.exports = config;