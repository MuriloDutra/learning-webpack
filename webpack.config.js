const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//index.0a787b220019d3363604.bundle
//print.2ec3efa4d2fd8a117c44.bundle
//vendors-node_modules_lodash_lodash_js.7d3c072cc9b31fffa649.bundle

//index.dfaed5bfb582617d8b4a.bundle
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',//To show error bundles
    devServer: {
        contentBase: './dist',//the location that devServer should look for
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
        })
    ],
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //It cleans '/dist' folder before a new build
        publicPath: '/', //The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:3000. The next step is setting up our custom express server
    },
    optimization: {
        moduleIds: 'deterministic',//despite any new local dependencies, our vendor hash should stay consistent between builds:
        runtimeChunk: 'single', //to create a single runtime bundle for all chunks
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
            },
        },
    },
}