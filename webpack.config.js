const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/assets/js/index.js',
        contacto: './src/assets/js/contacto.js',
        portfolio: './src/assets/js/portfolio.js',
        tipeo: './src/assets/js/tipeo.js',
        sobreMi: './src/assets/js/sobreMi.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        watchFiles: ['src/*'],
        port: 8082,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            template: './src/index.html',
            inject: 'head',
        })
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                use: [
                    'url-loader',
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto'
            },
        ]
    }
};