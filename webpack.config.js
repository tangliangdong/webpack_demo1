var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var production = process.env.NODE_ENV === 'production';
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        join: './src/join.js',
        vendor: ['jquery', 'mustache'],
    },
    output: {
        filename: production ? 'js/[name]-[hash].js' : 'js/[name]-bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        // publicPath: path.resolve(__dirname, 'dist'),
        chunkFilename: 'js/[name].[chunkhash:5].chunk.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, 'src/Components/js'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
            ]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }, ]
        }, {
            test: /\.(jpg|png|gif|svg)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'img/[name]-[hash:6].png',
                    limit: 8192
                }
            }, {
                loader: 'image-webpack-loader',
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
            }],
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor"],
            minChunks: 2,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                // collapseWhitespace: true,
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: 'join.html', //生成的html存放路径，相对于path
            template: './join.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            minify: { //压缩HTML文件  
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new CleanPlugin(['dist']),
    ],
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 8080, //默认8080
        inline: true, //可以监控js变化
        hot: true, //热启动
    }
};