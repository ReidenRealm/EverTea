import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';


const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Image 
        source={require('../assets/home.png')}
        style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
        source={require('../assets/notification.png')}
        style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
        source={require('../assets/heart.png')}
        style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/wallet.png')}
        style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6d3d0',
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:23,
    borderTopWidth:1,
    borderTopColor: '#ddd',
  },
  navItem:{
    flex:1,
    alignItems:'center',
  },
  icon:{
    width: 28,
    height:28,
  }
});

export default NavigationBar;


