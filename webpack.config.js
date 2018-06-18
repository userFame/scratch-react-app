const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, 'app'),
    entry: {
        // app: ['babel-polyfill','./index.jsx'],
        // about: ['babel-polyfill','./about.jsx']

        app: './index.jsx',
        // about: './about.jsx',
        // user: './user.jsx',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },

    // entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },


    module: {
        loaders: [
            {
                test: /\.(js$|jsx)$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app')
            },
            // {
            //     test: /\.jsx$/,
            //     loader: 'babel-loader',
            //     include: path.join(__dirname, 'app'),
            // },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: path.join(__dirname, 'app')
            },

            //look up image-loader as well for more options
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                include: path.join(__dirname, 'app')
            },
            // for fonts?
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader',
                include: path.join(__dirname, 'app', 'public', 'fonts')
                }
        ],
        // rules: [
        //     {
        //         test: /\.(js$|jsx)$/,
        //         exclude: /node_modules/,
        //         use: ['babel-loader']
        //     },
        //     {
        //         test: /\.(js$|jsx)$/,
        //         exclude: /node_modules/,
        //         use: ['babel-loader', 'eslint-loader']
        //     }
        // ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        stats: 'errors-only',
        hot: true,
        historyApiFallback: true
    },

    // shortcut to styles folder when importing so you dont need to do relative path
    // resolve: {
    //     alias: {
    //         'styles': path.resolve(__dirname, 'app/styles')
    //     }
    // },

    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            hash: true,
            excludeChunks: ['about']
            // chunks: ['commons', 'app']

        }),

        // creates localhost:8080/about.html
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'index.html'),
        //     hash: true,
        //     filename: 'about.html',
        //     excludeChunks: ['app']
        //     // chunks: ['commons', 'about']
        // }),

        // creates localhost:8080/user.html
        // new HtmlWebpackPlugin({
            // template: path.join(__dirname, 'index.html'),
            // hash: true,
            // filename: 'user.html',
            // includeChunks: ['user']
            // chunks: ['commons', 'about']
        // }),
        
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['commons', 'vendor', 'bootstrap']
        })
    ],


}