const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app:'./src/index.js',
    print:'./src/print.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'output Managemnt'
    })
  ]
};