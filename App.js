import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomeScreen} from './src/screens'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
