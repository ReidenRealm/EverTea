// import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const NotificationName = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Notifications</Text>
//     </View>
//   );
// };

// export default NotificationName;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Takes full screen height
//     justifyContent: 'center', // Centers vertically
//     alignItems: 'center', // Centers horizontally
    
//   },
//   header: {
//     fontSize: 24, // Adjust font size as needed
//     fontWeight: 'bold', // Make it bold if needed
//     textAlign: 'center',
//     left:125,
//     bottom:300,
//     // marginTop:50
    
//   }
// });


import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 375; // Base screen width for scaling
const normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const NotificationName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
    </View>
  );
};

export default NotificationName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  header: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.1, // 10% from the top
  }
});
