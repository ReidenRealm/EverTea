// import * as React from 'react';
// import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

// const NavigationBar = () => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.navItem}>
//         <Image 
//           source={require('../assets/home.png')}
//           style={styles.icon}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image
//           source={require('../assets/notification1.png')}
//           style={styles.icon} 
//         />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image
//           source={require('../assets/heart.png')}
//           style={styles.icon}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image 
//           source={require('../assets/wallet.png')}
//           style={styles.icon} 
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //position: 'absolute',
//     // bottom: 230,
//     // left: 10,
//     // right: 0,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 20,
//     marginVertical:-40    
    
//   },
//   navItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   icon: {
//     width: 28,
//     height: 28,
//     tintColor: '#8A8A8A',
//   }
// });

// export default NavigationBar;


import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

// Get screen width
const { width } = Dimensions.get('window');

// Define navigation items
const navItems = [
  { id: 'home', icon: require('../assets/home.png') },
  { id: 'notifications', icon: require('../assets/notification1.png') },
  { id: 'favorites', icon: require('../assets/heart.png') },
  { id: 'wallet', icon: require('../assets/wallet.png') },
];

const NavigationBar = ({ activeTab, setActiveTab }: any) => {
  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.navItem}
          onPress={() => setActiveTab(item.id)}
        >
          <Image
            source={item.icon}
            style={[
              styles.icon,
              { tintColor: activeTab === item.id ? '#1D95FF' : '#8A8A8A' }, // Highlight active tab
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical:15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    width: width, // Full screen width
    position: 'absolute',
    bottom: 0,
  },
  navItem: {
    padding: 10, // Increases touchable area
  },
  icon: {
    width: 30, // Slightly increased for better visibility
    height: 30,
  },
});
