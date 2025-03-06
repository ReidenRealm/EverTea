import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,StatusBar,Image, TouchableOpacity} from 'react-native';


const header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle= "dark-content" />
      {/* Header with profie */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
          source={require('../assets/profile.jpg')}
          style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      {/* Header */}
      <Text style={styles.topic}>Financial Tracker</Text>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom:20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:15,
    position:'absolute',
  },
  topic: {
 
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',
    
  },
  profile: {
    height:45,
    width:45,
    top:10,
    left:310,
    borderRadius:20,
    elevation: 10,
  }
});

export default header;