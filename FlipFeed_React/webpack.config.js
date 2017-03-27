var webpack = require('webpack');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#source-map'
};
