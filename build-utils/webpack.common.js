const commonPaths = require("./common-paths");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    vendor: ["babel-polyfill", "semantic-ui-react"]
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    })
  ]
};
module.exports = config;
