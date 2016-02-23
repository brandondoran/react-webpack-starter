[![Build Status](https://travis-ci.org/brandondoran/react-webpack-starter.svg?branch=master)](https://travis-ci.org/brandondoran/react-webpack-starter)
[![Dependency Status](https://david-dm.org/brandondoran/react-webpack-starter.svg)](https://david-dm.org/brandondoran/react-webpack-starter)
[![devDependency Status](https://david-dm.org/brandondoran/react-webpack-starter/dev-status.svg)](https://david-dm.org/brandondoran/react-webpack-starter#info=devDependencies)

# react-webpack-starter

A minimal starter for React apps.

- Babel transpiler
- Webpack bundler with dev and prod configs
- [Hot Module Replacement](https://github.com/gaearon/react-transform-hmr) in dev
- Express dev server with [Webpack dev middleware](https://github.com/webpack/webpack-dev-middleware) and prod server
- ESlint with [Airbnb configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- Mocha test runner with [expect](https://github.com/mjackson/expect) assertions


## Running in development

    npm start
    

## Running in production

    NODE_ENV=production npm run build
    NODE_ENV=production npm start
    
 