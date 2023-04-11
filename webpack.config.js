const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const defaultConfig = {
    entry: "./src/app.js",
    mode: "development",
    output: {
      path: path.resolve(__dirname, "ext"),
      filename: "bundle.js",
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'ext'),
        }
    },
  };
  return merge(defaultConfig, {
    plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "./index.html",
          templateParameters: {
            isLocal: true,
            orgName: "hrcls",
          },
        }),
    ]
  });
};
