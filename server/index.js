require('babel-register');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./development');
} else {
  module.exports = require('./production');
}
/* eslint-enable global-require */
