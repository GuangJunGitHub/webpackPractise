const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"]
    },
    // optimization: { //mode为production才生效，默认开启
    //     splitChunks: {
    //         chunks: 'async', //async对异步加载的组件拆分chuncks
    //         minSize: 20000, //当分包达到多少字节后才允许真正拆分、20kb
    //         minRemainingSize: 0,
    //         minChunks: 1, //一个模块被多少个chunk使用时，才会进行分包，默认值为1
    //         maxAsyncRequests: 30,
    //         maxInitialRequests: 30,
    //         enforceSizeThreshold: 50000,
    //         cacheGroups: {
    //             defaultVendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 reuseExistingChunk: true,
    //             },
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //             },
    //         },
    //     },
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
        static: path.resolve(__dirname, "build"),
        compress: true,
        port: 3000,
        open: true,
        hot: true
    }
}