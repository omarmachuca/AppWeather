const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');


module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist'),
       clean: true,
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [ {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}