import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

const app = express();
const port = process.env.PORT || 8000;
const compiler = webpack(config);
const index = path.join(__dirname, '../app', 'index.html');

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

app.use((req, res) => res.sendFile(index));

app.listen(port, 'localhost', () => console.info(`Listening at http://localhost:${port}`));
