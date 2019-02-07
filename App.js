import React, { Component } from 'react';
import { store } from './store/index'
import { Provider } from 'react-redux'
import Home from "./space/Home";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
