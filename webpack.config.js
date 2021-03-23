const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//index.173e73872d9846252e0e.bundle
//index.173e73872d9846252e0e.bundle
//index.173e73872d9846252e0e.bundle
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
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
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
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