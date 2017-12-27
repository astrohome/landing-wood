const webpack = require('webpack')
const path = require('path')
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const cssConfigEnvironments = {
  'dev': ['style-loader', 'css-loader?sourceMap', 'sass-loader'],
  'prod': ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
  })
}

const envIsProd = process.env.NODE_ENV === 'prod'
const cssConfig = envIsProd ? cssConfigEnvironments['prod'] : cssConfigEnvironments['dev']

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
    new ExtractTextPlugin('bulma.min.css')
  ]
}
