import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import FinancialTrackerScreen from './FinancialTrackerScreen';
import ViewFullReport from './ViewFullReport';
import NavigationBar from './NavigationBar';
import ExploreMore from './ExploreMore';

const App = (): React.JSX.Element => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <FinancialTrackerScreen />
      <ViewFullReport />
      <NavigationBar/>
      <ExploreMore/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e6e6',
  },
});

export default App;
