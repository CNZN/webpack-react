const path = require ('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = () => {
    const config = merge.merge([common, {
        mode: 'development',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebPackPlugin({
                template: 'public/index.html'
            })
        ],
        devServer: {
            hot: true,
            open: true,
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 8888,
            historyApiFallback:true,
            proxy: {
                '/api': {
                    target: 'http://localhost:8888/',
                    changeOrigin: true
                }
            }
        }
    }]);
    return config;
}