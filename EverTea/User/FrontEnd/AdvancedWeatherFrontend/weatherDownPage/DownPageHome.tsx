import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NotificationName from './NotificationName';
import NotificationMessage from './NotificationMessage';
import NavigationBar from './NavigationBar';

const DownPageHome = () => {
  return (
    <View style={styles.container}>
      <Text>
        <NotificationMessage/>
        {/* <NotificationName/>  */}
        
      </Text>
      <NavigationBar/>
    </View>
  );
};

export default DownPageHome;

const styles = StyleSheet.create({
  container: {
  
    
  }
});
