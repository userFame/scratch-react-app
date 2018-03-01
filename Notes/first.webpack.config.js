var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
// var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = {
    // in inspector, shows exact error in js file, others are available in documentation
    devtool: 'source-map',
    // when creating multiple webpack bundles (mwpb), we can use...
    context: path.join(__dirname, 'app'),
    // -> to be the 'pre context' to the entry path
    // also, when there are multiple bundles ... see // 1 ... it takes an object.
    // entry: path.join(__dirname, 'app' , 'index.jsx'),
    // 1
    entry: {
        app: './index.jsx',
        about: './about.jsx'
        // vendor: ['jquery', 'react', 'angular', etc.....]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    // for babel transpiler and others, read up on module object in webpack
    // npm i babel-loader babel-core
    // babel-loader is for webpack, babel-core is for babel
    // check out how to use babel-preset-env as well
    module: {
        loaders: [
            {
                // this basically says what file types to handle
                test: /\.js$/,
                // regex says that to look for .js files and the $ sign tells it to look at the end of the file name
                loader: 'babel-loader',
                // include:  for including files that you need
                // exclude:  for exluding files, usually set up with -> /node_modules/
                exclude: path.join(__dirname, 'node_modules'),
                // can only use one and not both include and exlude
                // babel or webpack documentation says to use include
                // include: /src/
                // include: path.join(__dirname, 'app'),
                // query: {
                //     preset: ['es2015']
                // }
            },
            {
                // needed to handle jsx files???
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules'),
                // include: path.join(__dirname, 'app'),
            },
            {
                test: /\.css$/,
                // loaders order shoud be last to first so first comes in is css-loader, then style-loader separated with a bang 
                loader: 'style-loader!css-loader',
                include: path.join(__dirname, 'app')
            }
            // you can add more loaders with the same format
        ]
    },
    // used for hot reloading
    // also with dev-server, you can delete dist folder.
    devServer: {
        // define the folder that the index html is in for dev server to find
        contentBase: path.join(__dirname, 'dist'),
        // because dev-server works in an iframe, set inline to true so that you can work on styling as well
        inline: true,
        // use stats to show only errors in terminal and not every bundling information, can be more configurable see documentation
        stats: 'errors-only',
        // look up hot reloading module for webpack for css
        hot: true
    },

    // resolve: {
    //     // for importing css on the jsx files, this allows you refer the folder from this starting point, so no need for
    //     // relative path finding ( ../ or ./ )
    //     alias: {
    //         'styles': path.resolve(__dirname, 'src/styles')
    //     }
    // },

    plugins: [
        // // constructor function and automatically injects script tag within a new index.html with your bundles and puts it in dist folder (from dev server contentBase?? or most likeley from output path)
        // new HtmlWebpackPlugin({
        //     // must use template to use the index.html that you created
        //     template: path.join(__dirname, 'index.html'),
        //     // inject: body -> you can inject the plugin into any tag, by default it is body
        //     // hashes bundled js files with a hash and injects it into the script tag
        //     hash: true,
        //     // chunks: ['entry'] --> lookup
        //     // excludechunks if you want to exclude chunks
        // }),

       
        new HtmlWebpackPlugin({
            // must use template to use the index.html that you created
            template: path.join(__dirname, 'index.html'),
            // inject: body -> you can inject the plugin into any tag, by default it is body
            // hashes bundled js files with a hash and injects it into the script tag
            hash: true,
            filename: 'index.html',
            chunks: ['app'],
            // excludechunks if you want to exclude chunks
        }),


        // can use this if you have more than one bundle
        new HtmlWebpackPlugin({
            // must use template to use the index.html that you created
            template: path.join(__dirname, 'index.html'),
            // inject: body -> you can inject the plugin into any tag, by default it is body
            // hashes bundled js files with a hash and injects it into the script tag
            hash: true,
            filename: 'about.html',
            chunks: ['about']

        }),

        // hot reloading for css, also make sure devSerer has hot:true
        new webpack.HotModuleReplacementPlugin(),

        // first require commons chunk plugin at the top, this is only needed when you have more than one bundle. do i need????
        // entry ideas?/multiple bundles??? one for the login page, one for the user page, one for the admin page, one for the anonymous page
        // new CommonsChunkPlugin({
        //     name: 'commons'
        // })
    ]


}

// in package.json in scripts, use webpack --watch to watch js files and bundles automatically without calling npm start everytime