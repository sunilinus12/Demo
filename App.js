import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListingScreen} from './src/screens';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <ListingScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({});
