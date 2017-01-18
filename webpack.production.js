var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.(png|jpg)$/, loader: 'file' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=10000'},
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].min.css', {
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: './assets' },
      { from: './node_modules/spookycss/css/spooky.min.css', to: './css'}
    ])
  ],
  vue: {
    loaders: {
      scss: 'vue-style-loader!css-loader!sass-loader',
      css: ExtractTextPlugin.extract('css')
    }
  }
}
