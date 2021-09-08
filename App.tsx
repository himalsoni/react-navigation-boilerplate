import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Router from './src/router';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View style={{flex:1}}>
      <Router />
    </View>
  );
};
export default App;
