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
    backgroundColor: '#fff',
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:18,
    borderTopWidth:1,
    borderTopColor: '#ddd',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    elevation:20,
  },
  navItem:{
    flex:1,
    alignItems:'center',
  },
  icon:{
    width: 28,
    height:28,
    tintColor:'#8A8A8A',
  }
});

export default NavigationBar;


