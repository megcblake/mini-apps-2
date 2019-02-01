const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client/app.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'), // string
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
