const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LicenseWebpackPlugin =
  require('license-webpack-plugin').LicenseWebpackPlugin;

const base = require('./webpack.base.js');
const PUBLIC_URL = '/mina/ditch';

module.exports = merge(base, {
  mode: 'production',
  devtool: 'cheap-source-map', // hidden-source-map
  // performance: {
  //   maxEntrypointSize: 921600, // 900 KB
  //   maxAssetSize: 921600, // 900 KB
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 921600, // 900 KB
    maxAssetSize: 921600, // 900 KB
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"production"',
      PUBLIC_URL: JSON.stringify(PUBLIC_URL),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      PUBLIC_URL,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css',
      chunkFilename: 'css/[id].[chunkhash].css',
    }),
    new LicenseWebpackPlugin({ perChunkOutput: true }),
  ],
});
