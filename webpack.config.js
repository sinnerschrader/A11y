const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const ROOT = __dirname;
const DOCS = path.resolve(ROOT, "docs");

module.exports = {
  entry: {
    bundle: "./gh-pages/index.js"
  },
  output: {
    path: DOCS,
    filename: "[name].js",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  },
  devServer: {
    contentBase: DOCS,
    compress: false,
    historyApiFallback: true,
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "A11y",
      filename: "index.html",
      template: "gh-pages/index.html",
      alwaysWriteToDisk: true,
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        quoteCharacter: '"',
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortClassName: true,
        sortAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: DOCS
    })
  ]
};
