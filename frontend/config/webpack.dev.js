const { HotModuleReplacementPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: '../dist',
    open: 'chrome',
    hot: true,
    historyApiFallback: true,
  },
  target: 'web',
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}

module.exports = merge(common, devConfig)
