import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import fetch from 'isomorphic-fetch';

import TestComponent from '../components/Home';
import initialState from '../redux/initialState';
import fixtures from '../redux/fixtures';
import createStore from '../redux/store.js';

const store = createStore({
  ...initialState,
  repos: {
    data: fixtures.repos,
    state: {
      loading: false,
      error: false,
      success: true,
      loaded: true,
    },
  },
});
const TestComponentProvider = () => (
  <Provider store={store}>
    <TestComponent />
  </Provider>
);

it('renders correctly with snapshot', () => {
  const tree = renderer.create(<TestComponentProvider />).toJSON();
  expect(tree).toMatchSnapshot();
});
