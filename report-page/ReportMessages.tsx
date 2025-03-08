import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



const ReportMessages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.messages}>
        <View style={styles.message}>
          <Image source={require('../assets/high-arrow.png')}
          style={styles.arrow}/>
          <Text style={styles.boldText}>Sold tea leaves 5 KG</Text>
          <Text style={styles.date}>nov 01, 2.00 P.M</Text>
          <Text style={styles.price}>+ 1500 LKR</Text>
        </View>
        
      </View>
      <View style={styles.messages}>
        <View style={styles.message}>
          <Image source={require('../assets/high-arrow.png')}
          style={styles.arrow}/>
          <Text style={styles.boldText}>Sold tea leaves 10 KG</Text>
          <Text style={styles.date2}>nov 12, 11.00 A.M</Text>
          <Text style={styles.price2}>+ 3000 LKR</Text>
        </View>
        
      </View>
      <View style={styles.expenseMessage}>
        <View style={styles.message}>
          <Image source={require('../assets/low-arrow.png')}
          style={styles.arrow}/>
          <Text style={styles.boldText}>Take tea leaves</Text>
          <Text style={styles.date3}>nov 01, 2.00 P.M</Text>
          <Text style={styles.lowPrice}>- 1500 LKR</Text>
        </View>
        
      </View>
    </View>
  );
};

export default ReportMessages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFBC6C',
    paddingTop:190,
    bottom:200,
    position:'relative',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor:'white',
    marginVertical:10,
    width:'88%',
    left:20,
    bottom:10,
  },
  messages:{
    backgroundColor: '#E6FFF6',
    width:'90%',
    left:20,
    borderRadius:15,
    padding:8,
    justifyContent:'space-between',
    marginBottom:5,
    bottom:10,
  },
  message:{
    flexDirection:'row',
    justifyContent:'space-around',
    
  },
  arrow:{
    width:50,
    height:50,
    left:10,
  },
  boldText:{
    fontSize:20,
    fontWeight:'bold',
    left:30,
  },
  date:{
    top:29,
    right:163,
    color:'grey'
  },
  date2:{
    top:29,
    right:175,
    color:'grey'
  },
  date3:{
    top:29,
    right:113,
    color:'grey'
  },
  price:{
    color:'green',
    right:105,
    top:30,
    fontSize:16,
  },
  price2:{
    color:'green',
    right:130,
    top:30,
    fontSize:16,
  },
  expenseMessage:{
    backgroundColor: '#FFEBE6',
    width:'90%',
    left:20,
    borderRadius:15,
    padding:8,
    justifyContent:'space-between',
    marginBottom:8,
    bottom:10,
  },
  lowPrice:{
    color:'red',
    right:60,
    top:30,
    fontSize:16,
  }
});
