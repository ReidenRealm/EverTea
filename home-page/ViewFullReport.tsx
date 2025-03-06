import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";

const ViewFullReport = () => {
  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => Alert.alert('Button Pressed!')}
      >
        <Text style={styles.buttonText}>View Full Report</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e8e6e6',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#169C6D',
    paddingVertical: 20,
    paddingLeft:100,
    paddingRight:100,
    borderRadius:30,
    marginTop:10,
  },
  buttonText: {
    color:'#ffff',
    fontWeight:'bold',
    fontSize:17,
  }
});

export default ViewFullReport;