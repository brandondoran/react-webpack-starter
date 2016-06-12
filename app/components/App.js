import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/about">About</Link>
      {' '}
    </header>
    <div style={{ marginTop: '1.5em' }}>{children}</div>
  </div>
);


App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
