var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var production = process.env.NODE_ENV === 'production';
var webpack = require('webpack');

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'main', // 把依赖移动到主文件
        children: true, // 寻找所有子模块的共同依赖
        minChunks: 2, // 设置一个依赖被引用超过多少次就提取出来
    }),
];

if (production) {
    plugins = plugins.concat([

        // 在编译最终的静态资源之前，清理 builds/ 文件夹
        new CleanPlugin('dist'),
    ])
}



module.exports = {
    entry: {
        index: './src/index.js',
        join: './src/join.js',
    },
    output: {
        filename: production ? 'js/[name]-[hash].js' : 'js/[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, 'src/componsents/js'),
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
                { loader: "css-loader" }
            ]
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
    ],
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 9090, //默认8080
        inline: true, //可以监控js变化
        hot: true, //热启动
    }
};