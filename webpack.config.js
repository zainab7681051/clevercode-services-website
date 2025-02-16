import webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const nonce = crypto.randomBytes(16).toString('base64');
export default {
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: path.resolve(__dirname, "Src", "main.js"),
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "[name].[contenthash:8].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf)$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                    outputPath: "assets",
                    esModule: false
                }
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ?
                        MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? "[name].[contenthash:8].css" : "[name].css",
            chunkFilename: isProduction ? "[id].[contenthash:8].css" : "[id].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'Public'),
                    to: path.resolve(__dirname, 'dist'),
                    globOptions: {
                        ignore: ['**/index.html'],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "Public", "index.html"),
            minify: 'auto',
            "nonce": nonce,
        }),
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm-bundler.js",
        },
        extensions: [".*", ".js", ".vue", ".json"],
    },
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -10,
                    chunks: "all",
                },
            },
        },
    },
    stats: {
        errorDetails: true,
        children: true
    },
    devtool: isProduction ? false : 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        host: 'localhost',
        historyApiFallback: true,
        open: true,
        port: 'auto',
    },
};


