"use strict";

const SizePlugin = require("size-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = require("./paths");
const path = require("path");
// To re-use webpack configuration across templates,
// CLI maintains a common webpack configuration file - `webpack.common.js`.
// Whenever user creates an extension, CLI adds `webpack.common.js` file
// in template's `config` folder
const common = {
    output: {
        // the build folder to output bundles and assets in.
        publicPath: "",
        path: PATHS.build,
        // the filename template for entry chunks
        filename: "[name].js",
    },
    devtool: "source-map",
    stats: {
        all: false,
        errors: true,
        builtAt: true,
    },
    module: {
        rules: [
            // Help webpack in understanding CSS files imported in .js files
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // This is required for asset URLs in CSS, such as url()
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                ],
            },
            // Check for images imported in .js files and
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // Print file sizes
        new SizePlugin(),
        // Copy static assets from `public` folder to `build` folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "**/*",
                    context: "public",
                },
            ],
        }),
        // Extract CSS into separate files
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
};

module.exports = common;
