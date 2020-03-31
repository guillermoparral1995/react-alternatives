const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const BrotliPlugin = require('brotli-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const env = process.env.NODE_ENV || "development";

const addBrotliFileToManfiest = (ext, file, manifest) => {
  if (file.isChunk && file.name.endsWith(`.${ext}`)) {
    manifest[`${file.chunk.name}.br.${ext}`] = file.path.replace(`.${ext}`, `.br.${ext}`);
  }
}

const devPlugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([{ from: "public" }], { ignore: ["*.html"] }),
  new HtmlWebPackPlugin({
    template: path.join(__dirname, "public", "index.html")
  }),
  new MiniCssExtractPlugin()
];

module.exports = Object.assign({}, {
  mode: env,
  entry: ["@babel/polyfill", path.join(__dirname, "src", "index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: env === 'production' ? "[name].[chunkhash].js" : "[name].build.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    writeToDisk: true,
    port: 3002
  },
  plugins: env === 'production' ? [
    ...devPlugins,
    new ImageminPlugin({
      bail: false,
      cache: true,
      name: '[name].[ext]',
      imageminOptions: {
        plugins: [
          'mozjpeg',
          'pngquant'
        ]
      }
    }),
    new BrotliPlugin({
			asset: '[fileWithoutExt].[ext].br',
      test: /\.(js|html|css)$/,
      deleteOriginalAssets: true
		}),
    new ManifestPlugin({
      publicPath: '',
      generate: (seed, files) => {
        return files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          addBrotliFileToManfiest('js', file, manifest);
          addBrotliFileToManfiest('html', file, manifest);
          addBrotliFileToManfiest('css', file, manifest);
          return manifest;
        }, seed);
      },
    }),
  ] : devPlugins,
  optimization: {
    minimize: env === "production",
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCSSAssetsWebpackPlugin()
    ],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
}, env === 'development' ? { devtool: "inline-source-map"} : {});
