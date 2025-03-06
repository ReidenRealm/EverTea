import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import ReportHeader from './ReportHeader';
import IncomeExpenseTab from './IncomeExpenseTab';
import IncomeCard from './IncomeCard';

const ReportPage = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" />
        <View>
          <ReportHeader />
          <IncomeExpenseTab />
          <IncomeCard />
        </View>
    </SafeAreaView>
  );
};

export default ReportPage;

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor:'#D7F3D8',
    padding:0,
    margin:0,
    width:'100%',
  }
});
