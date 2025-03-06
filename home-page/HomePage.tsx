import * as React from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Header from './Header';
import IncomeCard from './IncomeCard';
import ViewFullReport from './ViewFullReport';
import ExploreMore from './ExploreMore';
import NavigationBar from './NavigationBar';
const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
        <Header/>
        <IncomeCard/>
        <ViewFullReport/>
        <ExploreMore/>
        <NavigationBar/>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    
  }
});
