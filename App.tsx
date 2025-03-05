import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import FinancialTrackerScreen from './FinancialTrackerScreen';

const App = (): React.JSX.Element => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <FinancialTrackerScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
