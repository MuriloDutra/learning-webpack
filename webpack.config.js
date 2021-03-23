const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //It cleans '/dist' folder before a new build
        publicPath: '/', //The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:3000. The next step is setting up our custom express server
    },
    optimization: {
        splitChunks: {//The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk.
            chunks: 'all'
        }
    }
}