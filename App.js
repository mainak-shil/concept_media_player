import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor='rgba(53, 57, 64, 1)' barStyle="dark-content" />
      <AppNavigator />
    </View>

  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});