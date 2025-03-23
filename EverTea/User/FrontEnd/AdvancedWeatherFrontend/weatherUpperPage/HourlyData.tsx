import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';


const HourlyData = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.hourly}>
          <Image source={require('../assets/time.png')} style={styles.timeIcon}/>
          <Text style={styles.hourText}>Hourly Weather</Text>
        </View>

        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}

         >
          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>

          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>


          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>



          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>

          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>

          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>

          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>


          <View style={styles.scrollInner}>
            <Text>06 AM</Text>
            <Image source={require('../assets/cloud.png')}
            style={styles.icon}/>
            <Text style={styles.temp}>12°C</Text>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HourlyData;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#85A98A', // Box color
    paddingVertical: 20,
    borderRadius: 18,
    marginHorizontal: 20,
    overflow: 'hidden', // Ensures content stays within the box
    marginVertical:20
  },
  scrollContainer: {
    flexDirection: 'row', 

  },
  time: {
    marginHorizontal: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginVertical: 5,
  },
  temp: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
  },
  hourly:{
    flexDirection:'row',
    width:'95%',
    borderBottomWidth:1,
    borderColor:'grey',
    bottom:10,
    left:10,
    opacity:0.3
  },
  timeIcon:{
    width:20,
    height:20,
    //opacity:0.3,
  },
  hourText:{
    //opacity:0.3
  },
  scrollInner:{
    paddingHorizontal:10
  }
});
