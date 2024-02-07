const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

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
    allowedHosts: 'all',
    open: false,
    hot: true,
    port: 4000,
    historyApiFallback: true,
    static: {
      directory: './'
    }
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
