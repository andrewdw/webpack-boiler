"use strict";

const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: "./hmr.js",
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: './'
    }
}
