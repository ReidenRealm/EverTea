import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';

const {width, height} = Dimensions.get('window'); // Get device width and height

const Flow3 = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Flow3'>>();  // Type the navigation


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipBtnAlignment} onPress={() => navigation.navigate('LetsStart')}>
        <View style={styles.skipBtn}>
          <Text style={styles.skipFont}>Skip</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('../assets/trackMan.png')}
      />
      <Text style={styles.welcomeText}>
      Track &{'\n'}
      Improve Growth
      </Text>
      <Text style={styles.description}>
      Log your plant heights and receive{'\n'} expert insights for healthy growth.
      </Text>

      <View style={styles.buttomContainer}>
        <View style={styles.BackButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/Larrow.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.progS}>
          <View style={styles.proBar}></View>
          <View style={styles.proBarS}></View>
          <View style={styles.proBar}></View>
          <View style={styles.proBar}></View>
        </View>
        <View style={styles.RightButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Flow4')}>
            <Image source={require('../assets/Rarrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    skipBtn: {
      backgroundColor: '#F4BA3F',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 50,
    },
    skipBtnAlignment: {
      position: 'absolute',
      top: height * 0.05,
      right: 20,
    },
    skipFont: {
      color: '#fff',
      fontSize: 16,
    },
    container: {
      position:'relative',
      flex: 1,
      width:width,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
      width: width * 0.8, // Full width
      height: height * 0.3, // 40% of screen height
      position: 'absolute',
      top: height * 0.2,
      zIndex: 0,
    },
    welcomeText: {
      fontSize: width * 0.08, // Responsive font size
      fontWeight: '700',
      fontFamily: 'Poppins-Bold',
      textAlign: 'center',
      color: '#000',
      marginTop: height * 0.3 + 50, // Below the image
    },
    description: {
      fontSize: width * 0.04,
      color: '#818181',
      textAlign: 'center',
      marginTop: 10,
      width: '90%',
    },
    buttomContainer: {
      position:'absolute',
      display: 'flex',
      flexDirection: 'row', // Arrange items in a row
      alignItems: 'center', // Align items vertically in the center
      justifyContent: 'space-between', // Space elements evenly
      width: '100%', // Ensure it takes full width
      paddingHorizontal: 20, // Add some spacing
      bottom:height*0.05
    },
    progS: {
      display: 'flex',
      flexDirection: 'row', // Arrange progress bars in a row
      gap: 5, // Add spacing between progress bars
    },
    proBar: {
      width: 30,
      height: 10,
      backgroundColor: '#CECECE',
      borderRadius: 50,
    },
    proBarS: {
      width: 30,
      height: 10,
      backgroundColor: '#4E4E4E',
      borderRadius: 50,
    },
    BackButton: {
      width: 50,
      height: 50,
      backgroundColor: '#D4D4D4',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50
    },
    RightButton: {
      width: 50,
      height: 50,
      backgroundColor: '#20C58D',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50
    },
  });
export default Flow3;
