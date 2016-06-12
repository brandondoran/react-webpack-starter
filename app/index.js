import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';

render(
  <AppContainer>
     <Router history={browserHistory}>
      {routes()}
     </Router>
  </AppContainer>,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
