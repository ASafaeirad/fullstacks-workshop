const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const WebpackBar = require('webpackbar');
const webpackBaseConfig = require('./webpack.base.config');

const devConfig = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  plugins: [
    new WebpackBar({
      color: 'cyan',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  stats: {
    all: false,
    colors: true,
    errors: true,
    warnings: true,
    env: true,
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', '..', 'public'),
    publicPath: '/',
    compress: true,
    port: 3000,
    stats: 'errors-only',
  },
};

const config = merge(webpackBaseConfig, devConfig);

module.exports = config;
