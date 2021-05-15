const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'disabled' }),
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    contentBase: './',
    open: true,
    compress: true,
    hot: true,
    port: 4000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()]
              })
            }
          }
        ]
      }
    ]
  }
});
