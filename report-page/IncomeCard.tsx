import * as React from 'react';
import { Text,Image, View, StyleSheet } from 'react-native';
import Graph from './Graph';


const IncomeCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>NOV O1 - NOV 23</Text>
      <View style={styles.incomeCost}>
        <Image source={require('../assets/high-arrow.png')}
        style={styles.lowArrow}/>
        <Text style={styles.incomeText}>150,000 LKR</Text>
      </View>
      <View style={styles.graphStyle}>
        <Graph />
      </View>
      
    </View>
  );
};

export default IncomeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    margin:20,
    width:'85%',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
    left:10,
    borderRadius:20,
    elevation:10,
  },
  date:{
    fontWeight:'bold',
    justifyContent:'center',
    position:'relative',
    top:10,
  },
  incomeCost:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
  },
  lowArrow:{
    width:50,
    height:50
  },
  incomeText:{
    fontSize:28,
    fontWeight:'bold',
    top:5,
  },
  graphStyle:{
    marginBottom:13,
  }
});
