const path = require ('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
// const BundleAnalyzerPlugin = require('')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const MycliConsolePlugin = require('./myplugin/index')

module.exports = () => {
    const config = merge.merge([common, {
        mode: 'development',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebPackPlugin({
                template: 'public/index.html'
            }),
            new BundleAnalyzerPlugin({ analyzerPort: 8081 }),
            new MycliConsolePlugin({
                dec:1
            })
        ],
        
        devServer: {
            hot: true,
            open: true,
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 8888,
            quiet: true,
            historyApiFallback:true,
            // 本地代理的端口号
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