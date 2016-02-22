import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../app/components/App';

describe('App', function() {
  it('should render a message', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const actual = renderer.getRenderOutput();
    const expected = <div>react-webpack-starter!</div>;
    expect(actual).toEqual(expected);
  });
});
