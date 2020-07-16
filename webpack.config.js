const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');       //html文件打包，压缩
const { CleanWebpackPlugin } = require("clean-webpack-plugin");     //删除原来的打包文件

module.exports = {
    mode: 'development',
    entry: {        //入口文件
        index: './src/index.js',
    },
    output: {       //出口文件
        publicPath: '',     //模板、样式、脚本、图片等资源的路径中统一会加上额外的路径
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                exclude: path.resolve(__dirname, 'node_modules'), //编译时，不需要编译哪些文件
                //include: path.resolve(__dirname, 'src'),//在config中查看 编译时，需要包含哪些文件
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 100,
                    name: './img/[name].[hash:7].[ext]',
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer:{
        contentBase:false,
        //我这里没有设置contentBase，个人研究contentBase必须指向存在的bundle.js文件所在目录，
        //因为这里是开发模式，所以dist目录并不存在，所以用false.
        host:'localhost',
        port:'8888',
        inline:true,//webpack官方推荐
        watchOptions: {
            aggregateTimeout: 2000,//浏览器延迟多少秒更新
            poll: 1000//每秒检查一次变动
        },
        compress:true,//一切服务都启用gzip 压缩
        historyApiFallback:true,//找不到页面默认跳index.html
        hot:true,//启动热更新，必须搭配new webpack.HotModuleReplacementPlugin()插件
        open:true,
    },
    plugins: [
        new CleanWebpackPlugin(),       //删除上次打包文件，默认目录'./dist'
        new HtmlWebpackPlugin({
            // favicon: './src/img/favicon.ico',      //图标
            template: './src/index.html',      //指定要打包的html
            filename:'index.html',       //指定输出路径和文件名
            minify: {       //压缩
                removeComments: true,       //移除HTML中的注释
            }
        })
    ]
};