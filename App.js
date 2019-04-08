/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RenderView from './src/components/container/ReduxDemo'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';
import ConfigureStore from './src/store/ConfigureStore'
const store = ConfigureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <RenderView />
      </Provider>
    );
  }
}
