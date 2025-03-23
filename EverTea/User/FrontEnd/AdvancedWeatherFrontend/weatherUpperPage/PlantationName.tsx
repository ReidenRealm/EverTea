import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const PlantationName = ({location}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.plantId}>Plantation 01</Text>
      <Text style={styles.location}>{location ? location : "Loading location...."}</Text>
    </View>
  );
};

export default PlantationName;

const styles = StyleSheet.create({
  container: {
    padding:30,
    top:20,
  },
  plantId:{
    fontWeight:'bold',
    fontSize:20,
    fontStyle:'italic'
  },
  location:{
    width:'80%',
  }
});
