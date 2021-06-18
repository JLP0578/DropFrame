const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/index'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: 'none',
    devServer: {
        port: 8080
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(css|scss)$/,
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [{
                    loader: 'url-loader',
                    options: {
                        encoding: 'base64',
                        limit: 8192,
                    }
                }],
        }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};
