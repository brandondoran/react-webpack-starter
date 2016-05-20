import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common, { basePath } from './webpack.common';

const dev = common({
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './app/index'
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: basePath('app/assets/index.html'),
      inject: true
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [
          basePath('server'),
          basePath('app')
        ]
      }
    ]
  }
});

export default dev;
