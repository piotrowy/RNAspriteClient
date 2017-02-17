var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './index.js'
    ]
  },
  output: {
    path: './../RNAsprite/src/main/webapp/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 4444,
      open: false,
      server: {
        baseDir: ['./', './build']
      }
    })
  ]
};