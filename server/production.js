import express from 'express';
import path from 'path';
import compression from 'compression';

const app = express();
const port = process.env.PORT || 8000;
const index = path.join(__dirname, '../dist/index.html');

app.use(compression());

app.use('/static', express.static(path.join(__dirname, '../dist'), {
  maxage: '365 days'
}));

app.use((req, res) => res.sendFile(index));

app.listen(port, () => console.info('==> Listening on port %s.', port));
