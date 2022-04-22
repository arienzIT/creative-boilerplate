const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = merge(config, {
  mode: 'production',

  output: {
    path: path.join(__dirname, 'public')
  },

  plugins: [
    new CleanWebpackPlugin()
  ],

  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }]
            ]
          }
        }
      })
    ]
  }
})
