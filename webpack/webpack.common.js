import path from 'path';
import webpack from 'webpack';
import vendor from './vendor';

export const basePath = (p) => path.join(__dirname, '..', p);

export default function({ devtool, entry = {}, output = {}, plugins = [], module = {} }) {
  const { loaders = [], preLoaders = [] } = module;
  return {
    devtool,
    entry: {
      ...entry,
      vendor
    },
    output: {
      path: basePath('dist'),
      publicPath: '/static/',
      ...output
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(true),
      ...plugins
    ],
    module: {
      preLoaders: [
        ...preLoaders
      ],
      loaders: [
        {
          test: /\.jsx?/,
          loaders: ['babel'],
          include: basePath('app')
        },
        ...loaders
      ]
    }
  };
}
