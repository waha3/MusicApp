import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from './mobx/index.js';
import RootStack from './route.js';

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <RootStack />
      </Provider>
    );
  }
}
