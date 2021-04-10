const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'assets', to: 'assets' }, { from: 'site.webmanifest' }]
    })
  ]
});
