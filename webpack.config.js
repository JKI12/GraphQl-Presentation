const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      graphql: path.resolve('./node_modules/graphql'),
      react: path.resolve('./node_modules/react')
    }  
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      },
      {
        test: /\.flow?$/,
        use: 'ignore-loader'
      }
    ]
  }
}