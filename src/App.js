import React from 'react';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css'

import Home from './components/Home';
import initialState from './redux/initialState';
import createStore from './redux/store.js';

const store = createStore(initialState);

export default class RootProvider extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
