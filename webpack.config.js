'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: '[hash].js',
    path: 'build',
  },
  plugins: [
    new ExtractText('bundle.css'),
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
  ],
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.sass$/,
        use: ExtractText.extract(['css-loader', 'sass-loader']),
      }
    ],
  },
};
