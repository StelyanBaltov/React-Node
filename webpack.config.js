const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.join(__dirname, './src');
const template = path.join(__dirname, 'template.html')


const config = {
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            'babel-polyfill',
            APP_DIR + '/index.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    context: APP_DIR,
    resolve: {
        modules: [
            'node_modules',
            APP_DIR
        ],
        extensions: ['.js', 'jsx', '.css']
    },
    module: {
        rules: [
        {
            test: /(\.css|.scss)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
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

    },
    plugins: [
        new HtmlWebpackPlugin({
            template,
            path: BUILD_DIR,
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;