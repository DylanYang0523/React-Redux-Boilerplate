'use strict'

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
});

const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();


module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './client/index.jsx',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
                exclude: /node_modules(?!\/normalize)/
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader?sourceMap'
                    },
                    {
                        loader: 'css-loader?modules&importLoaders=1&localIdentName=[path][name]_[local]_[hash:base64:5]'
                    },
                    {
                        loader: 'less-loader?sourceMap'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        HotModuleReplacementPlugin
    ]
}
