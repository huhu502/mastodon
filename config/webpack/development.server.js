// Note: You must restart bin/webpack-dev-server for changes to take effect

const { resolve } = require('path');
const { env } = require('process');
const merge = require('webpack-merge');
const devConfig = require('./development.js');
const { devServer, publicPath, paths } = require('./configuration.js');

module.exports = merge(devConfig, {
  devServer: {
    host: env.LOCAL_DOMAIN ? '0.0.0.0' : devServer.host,
    port: devServer.port,
    headers: { "Access-Control-Allow-Origin": "*" },
    compress: true,
    historyApiFallback: true,
    contentBase: resolve(paths.output, paths.entry),
    publicPath,
    disableHostCheck: true,
  },
});
