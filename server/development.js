import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/webpack.dev.babel.js';

const app = express();
const port = process.env.PORT || 8000;
const compiler = webpack(config);
// const index = path.join(__dirname, '../d', 'index.html');

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    hash: false,
    cached: false,
    cachedAssets: false,
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result) {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
  });
});

app.listen(port, 'localhost',
  () => console.info(`Listening at http://localhost:${port}`)); // eslint-disable-line no-console
