const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { generateWebpackRules } = require('@frontendmonster/dev-utils/webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

const root = path.join(__dirname, '..', '..');
const projectRoot = path.join(__dirname, '..', '..', '..', '..');

const config = {
  target: 'web',
  entry: ['./src'],
  output: {
    path: path.join(projectRoot, 'docs'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      ...generateWebpackRules(
        {
          babel: true,
        },
      ),
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader??name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff',
      },

      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]',
      },
      {
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf',
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true, // Add this option
              localIdentName: '[name]__[local]__[hash:base64:5]', // Add this option
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              includePaths: [path.join(root, 'src', 'styles')],
            },
          },
        ],
      },
      { test: /\.(mp3|m4a)$/, exclude: /node_modules/, loader: require.resolve('file-loader') },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new CaseSensitivePathsPlugin(),
    new CopyWebpackPlugin([{ from: path.join(root, 'public'), to: path.join(projectRoot, 'docs'), ignore: ['index.html', 'favicon.ico'] }]),
  ],
};

if (process.env.WBA) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
