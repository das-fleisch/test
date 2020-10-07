const path = require('path');

module.exports = {
    entry: ["@babel/polyfill","./src/js/app.jsx"], // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, './src/js/components')
        }
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react",
                        {
                            plugins: [
                                ['@babel/plugin-proposal-decorators', { "legacy": true}],
                                ['@babel/plugin-proposal-class-properties', { "loose": true}],
                                '@babel/plugin-transform-runtime'
                            ]
                        }
                    ]    // используемые плагины
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            import: false,
                            url: true
                        }
                    },
                    //{ loader : 'sass-loader' },
                ]
            },

        ]
    },
    devServer: {
        /*
        historyApiFallback: {
            index: path.join(__dirname, './dev/index.html'),
        },
        */
        historyApiFallback: true,
        publicPath : '/public/',
        contentBase: [path.resolve(__dirname, './public'), path.resolve(__dirname, './src')],
        compress: true,
        inline: true,
        hot: true,
        stats:"errors-only",
        port: 8010
    }
};