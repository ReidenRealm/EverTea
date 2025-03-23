import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NotificationName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
    </View>
  );
};

export default NotificationName;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full screen height
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    
  },
  header: {
    fontSize: 24, // Adjust font size as needed
    fontWeight: 'bold', // Make it bold if needed
    textAlign: 'center',
    left:125,
    bottom:330
    
  }
});
