const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'disabled' })],
  devServer: {
    contentBase: './',
    open: true,
    compress: true,
    hot: true,
    port: 4000,
    historyApiFallback: true
  }
});
