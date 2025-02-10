import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.box}>
        <Text style={styles.city}>Galle</Text>
        <View style={styles.line} /> {/* Horizontal line */}
        <View style={styles.flexbox}>

          <View style={styles.box1}><Text style={styles.date}>Sun</Text> <Text style={styles.dateNo}>Feb 10</Text>
            <Image source={require('./assets/Images/HomePage/AdvanceWeather/sunny_color.png')} style={{ width: 40, height: 40 }} />
            <Text style={styles.climate}>Sunny</Text> <Text style={styles.cold}>15-20C</Text>  <Text style={styles.cold}>AQI 67</Text>
          </View>
          
          <View style={styles.box1}><Text style={styles.date}>Mon</Text> <Text style={styles.dateNo}>Feb 11</Text>
            <Image source={require('./assets/Images/HomePage/AdvanceWeather/sun_cloudy_color.png')} style={{ width: 40, height: 40 }} />
            <Text style={styles.climate}>Cloudy</Text> <Text style={styles.cold}>16-22C</Text> <Text style={styles.cold}>AQI 71</Text>
          </View>

          <View style={styles.box1}><Text style={styles.date}>Tue</Text> <Text style={styles.dateNo}>Feb 12</Text>
            <Image source={require('./assets/Images/HomePage/AdvanceWeather/lightning_color.png')} style={{ width: 40, height: 40 }} />
            <Text style={styles.climate}>Lightning</Text> <Text style={styles.cold}>17-20C</Text> <Text style={styles.cold}>AQI 65</Text>
          </View>

          <View style={styles.box1}><Text style={styles.date}>wed</Text> <Text style={styles.dateNo}>Feb 13</Text>
            <Image source={require('./assets/Images/HomePage/AdvanceWeather/heavy_rain_color.png')} style={{ width: 40, height: 40 }} />
            <Text style={styles.climate}>Heavy rain</Text> <Text style={styles.cold}>16-21C</Text> <Text style={styles.cold}>AQI 70</Text>
          </View>

        </View>
      </View>

      <View style={styles.flexbox}>

        <View  style={styles.box11}>
          <Text style={styles.date}>Now</Text> <Image source={require('./assets/Images/HomePage/AdvanceWeather/moon.png')} style={{ width: 28, height: 28 ,margin:10 }} /> <Text>21'</Text>
        </View>

        <View  style={styles.box10}>
          <Text style={styles.date}>10PM</Text> <Image source={require('./assets/Images/HomePage/AdvanceWeather/rain_slow.png')} style={{ width: 30, height: 30 ,margin:10 }} /> <Text>21'</Text>
        </View>

        <View style={styles.box10}>
          <Text style={styles.date}>11PM</Text> <Image source={require('./assets/Images/HomePage/AdvanceWeather/rain_fast.png')} style={{ width: 30, height: 30 ,margin:10 }} /> <Text>19'</Text>
        </View>

        <View style={styles.box10}>
          <Text style={styles.date}>12AM</Text> <Image source={require('./assets/Images/HomePage/AdvanceWeather/thunder.png')} style={{ width: 30, height: 30 ,margin:10 }} /> <Text>18'</Text>
        </View>

        <View style={styles.box10}>
          <Text style={styles.date}>1AM</Text> <Image source={require('./assets/Images/HomePage/AdvanceWeather/sun_and_rain.png')} style={{ width: 30, height: 30 ,margin:10 }} /> <Text>25'</Text>
        </View>

        <View style={styles.box10}>
          <Text style={styles.date}>6AM</Text> <Image source={require('./assets/Images/HomePage/AdvanceWeather/sun_and_rain.png')} style={{ width: 30, height: 30 ,margin:10 }} /> <Text>22'</Text>
        </View>
      </View>
      <View> <Image source={require('./assets/Images/HomePage/AdvanceWeather/Vector.png')} style={{ width: 20, height: 20 ,margin:10 }} /> </View>
      
      <View style={styles.whiteBox}><View style= {styles.midBox}>
          <View style={styles.boxInBox}> <Text style={styles.boxText}>High winds this evening</Text></View>
          <View style={styles.boxControl}>
            <View style={styles.boxin1}> <Text style={styles.textStyle}>Secure {'\n'}lightweight {'\n'}crops</Text></View>
            <View style={styles.boxin2}><Image source={require('./assets/Images/HomePage/AdvanceWeather/rb_5663 1.png')} style={{ width: 270, height: 270 ,marginRight:20 ,marginBottom:20}} /></View>
          </View>

          <View style={styles.button}><Text style={styles.buttonText}>See all</Text></View>
      </View></View>
      
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'rgb(103, 199, 236)',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize:17
  },
  button: {
    width:110,
    height:35,
    backgroundColor: 'rgb(255, 156, 7)',
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 26,
    marginTop: -23,
  },
  boxControl: {
    flexDirection: 'row'
  },
  boxin1: {
    width:175,
    height: 130,
  },
  boxin2: {
    width:175,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: 'rgb(83, 141, 228)',
    fontWeight: '900',
    marginTop: 15,
    marginLeft: 17,
  },
  boxText: {
    fontSize:16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
  boxInBox: {
    width: 230,
    height: 38,
    backgroundColor: 'rgb(58, 148, 252)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
    marginLeft: 23,
  },
  
  midBox: {
    width: 350,
    height: 260,
    backgroundColor:'rgb(186, 233, 255)',
    borderRadius: 30,
  },
  date: {
    fontWeight: 'bold',
    color: 'white',
  },
  dateNo: {
    fontSize: 12,
    color: 'rgba(250, 250, 250, 0.70)',
  },
  //flex box
  flexbox:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  box10: {
    height:100,
    width:50,
    alignItems: 'center',
    borderRadius: 10,
  },
  box11: {
    height:100,
    width:50,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'rgba(255, 254, 254, 0.4)',
  },
  box1: {
    height:125,
    width:60,
    // backgroundColor:'green',
    alignItems: 'center'
  },
  box: {
    width: 350,
    height:200,
    backgroundColor:'rgba(20, 41, 70, 0.66)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginBottom: 50,
    marginTop: 80,
  },
  city: {
    marginTop: 14,
    marginRight: 270,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  climate: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white'
  },
  cold:{
    fontSize: 10,
    color: 'rgba(250, 250, 250, 0.70)',
  },
  line: {
    width: '90%', // Full width of the box
    height: 0.4, // Thickness of the line
    backgroundColor: 'white', // Line color
    margin: 10,
    opacity: 0.6,
  },
  whiteBox: {
    width: '100%',
    height:'60%',
    backgroundColor: 'white',
    borderRadius: 50,
    paddingTop: 30,
    alignItems: 'center'
  }
})
