const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            api: path.resolve(__dirname, 'src/api'),
            pages: path.resolve(__dirname, 'src/pages'),
            helpers: path.resolve(__dirname, 'src/helpers'),
            constants: path.resolve(__dirname, 'src/constants'),
            components: path.resolve(__dirname, 'src/components'),
            reduxStore: path.resolve(__dirname, 'src/redux-store')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: './index.html'
        })
    ],
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: `bundle.js`
    },
    devServer: {
        contentBase: './dist',
        disableHostCheck: true,
        historyApiFallback: true,
        port: 8000,
        hot: true
    }
}
