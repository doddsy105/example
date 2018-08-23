const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');

module.exports = {
  entry: {
    app: './src/entry.jsx'
   },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
                publicPath: url => `../fonts/${url}`
            }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'img/',
                publicPath: url => `../img/${url}`
            }
        }]
      }
    ]
  },
  plugins: [
    new SassLintPlugin({
      configFile: '.sass-lint.yml'
    }),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'build')
  }
};