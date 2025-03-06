import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const ExploreMore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Explore More <Image 
      source={require('../assets/arrow-left.png')}
      style={styles.arrow}/></Text>

      <View style={styles.grid}>
        <View style={styles.box}>
          <Image source={require('../assets/budget.png')} style={styles.icon}/>
          <Text style={styles.text}>
            <Text style={styles.highlight}>BUDGET</Text> {"\n"}PLANNIG</Text>
        </View>

        <View style={styles.box}>
          <Image source={require('../assets/cost.png')} style={styles.icon}/>
          <Text style={styles.text}>
            <Text style={styles.highlight}>COST</Text>{"\n"} ESTIMATE</Text>
        </View>

        <View style={styles.box}>
          <Image source={require('../assets/progress.png')} style={styles.icon}/>
          <Text style={styles.text}>
            <Text style={styles.highlight}>PROGRESS</Text>{"\n"}MONITOR</Text>
        </View>

        <View style={styles.box}>
          <Image source={require('../assets/export.png')} style={styles.icon}/>
          <Text style={styles.text}>
            <Text style={styles.highlight}>EXPORT</Text>{"\n"} REPORT</Text>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#76cbde',
    marginTop:20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    flex:1,
  },topic:{
    fontWeight:'bold',
    marginLeft:32,
    marginTop:20,
  },
  arrow:{
    width:23,
    height:10,
    position:'relative',
  },
  icon:{
    width:55,
    height:65,
  },
  grid:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    marginTop:20,
    marginLeft:15,
    marginRight:15,
  },
  box:{
    backgroundColor: '#fff6ec',
    width:'47%',
    borderRadius: 15,
    padding: 5,
    marginBottom: 15,
    elevation:5,
  },
  highlight:{
    fontSize: 16,
    fontWeight:'bold',

  },
  text:{
    fontSize:14,
    textAlign:'center',
    position:'absolute',
    top:20,
    right:20,
  }
});

export default ExploreMore;