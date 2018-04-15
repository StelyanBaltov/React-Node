const express = require('express');
const app = express();
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const path = require('path');

const compiler = webpack(webpackConfig);
const indexFile = path.join(compiler.outputPath, 'index.html');

// hot reload setup
app.use(WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
        colors: true
    }
}));

app.use(WebpackHotMiddleware(compiler));

// react-router related
app.all('/*', (req, res) => {
    compiler.outputFileSystem.readFile(indexFile, (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result.toString());
    });
});

app.listen(5001, () => {
    console.log('Server lsitening on port 5001!')
})