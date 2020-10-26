const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            api: path.resolve(__dirname, 'src/api'),
            pages: path.resolve(__dirname, 'src/pages'),
            assets: path.resolve(__dirname, 'src/assets'),
            helpers: path.resolve(__dirname, 'src/helpers'),
            constants: path.resolve(__dirname, 'src/constants'),
            components: path.resolve(__dirname, 'src/components'),
            'redux-store': path.resolve(__dirname, 'src/redux-store'),
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: './index.html',
        }),
    ],
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: `bundle.js`,
    },
    devServer: {
        contentBase: './dist',
        disableHostCheck: true,
        historyApiFallback: true,
        port: 8000,
        hot: true,
    },
}
