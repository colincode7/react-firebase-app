'use strict';

const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const commonPaths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: `${commonPaths.jsFolder}/[name].[hash].js`,
    path: commonPaths.outputPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              camelCase: false,
              localIdentName: '[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('cssnano'), require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        extractComments: true,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new CleanWebpackPlugin([commonPaths.outputPath.split('/').pop()], {
      root: commonPaths.root
    }),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].[hash].css`,
      chunkFilename: '[id].[hash].css'
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),

    new WebpackPwaManifest({
      name: 'React Firebase Boilerplate',
      short_name: 'React Firebase Boilerplate',
      description: 'React Firebase Boilerplate!',
      background_color: '#fafafa',
      theme_color: '#b1624d',
      inject: true,
      ios: true,
      icons: [
        {
          src: commonPaths.imagesPath + '/icon-512x512.jpg',
          destination: commonPaths.imagesFolder,
          sizes: [72, 96, 128, 144, 192, 384, 512]
        },
        {
          src: commonPaths.imagesPath + '/icon-512x512.jpg',
          destination: commonPaths.imagesFolder,
          sizes: [120, 152, 167, 180],
          ios: true
        }
      ]
    })
  ],

  devtool: 'source-map',
  stats: 'errors-only',
  bail: true
};
