const config = require('./config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, `./${config.dir_example_src}`),
    entry: {
        app: './index.js',
        vendor: ['react', 'react-dom'],
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },

            // Loaders for other file types can go here
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/', // New
    },
    devServer: {
        contentBase: path.resolve(__dirname, `./${config.dir_example_root}`), // New
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: 'body'
        })
    ]
};
// ,
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false,
//                 drop_console: false,
//             }
//         })