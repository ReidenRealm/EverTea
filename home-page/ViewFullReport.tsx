import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";

const ViewFullReport = () => {
  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => Alert.alert('Button Pressed!')}
      >
        <Image source={require('../assets/heart-beat.png')} 
        style={styles.icon}/>
        <Text style={styles.buttonText}>View Full Report</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.downloadButton}>
        <View>
          <Image source={require('../assets/download.png')}
          style={styles.icon}/>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  button: {
    backgroundColor: '#FFC935',
    paddingVertical: 15,
    paddingLeft:55,
    paddingRight:55,
    borderRadius:20,
    marginTop:10,
    marginLeft:16,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  buttonText: {
    color:'#ffff',
    fontWeight:'bold',
    fontSize:17,
    top:6,
    marginLeft:10,
  },
  icon:{
    width:35,
    height:35,
    fontWeight:'bold',
    tintColor:'#424242'
  },
  downloadButton:{
    backgroundColor:'#FFC935',
    right:20,
    top:3,
    paddingVertical:13,
    paddingHorizontal:10,
    borderRadius:20,
  }
});

export default ViewFullReport;