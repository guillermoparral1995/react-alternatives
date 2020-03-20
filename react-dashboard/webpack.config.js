const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: [
    '@babel/polyfill',
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: env === 'development' ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true,
    writeToDisk: true,
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: "./styles.css"
    })
  ],
  optimization: {
    minimize: env === 'production',
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCSSAssetsWebpackPlugin(),
    ]
  }
}