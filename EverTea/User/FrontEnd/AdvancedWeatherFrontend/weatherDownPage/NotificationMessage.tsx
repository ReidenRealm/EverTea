


// // import * as React from 'react';
// // import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

// // const messages = [
// //   {
// //     id: '1',
// //     alert: 'Weather Alert 1',
// //     para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores, quis aut cupiditate itaque earum ratione architecto, molestias magnam iste, dolor laborum est ullam tempora tenetur voluptas impedit alias at.',
// //   },
// //   {
// //     id: '2',
// //     alert: 'Weather Alert 2',
// //     para: 'Another weather alert message. This is the second message in the queue.',
// //   },
// //   {
// //     id: '3',
// //     alert: 'Weather Alert 3',
// //     para: 'Yet another weather alert message. This is the third message in the queue.',
// //   },
// // ];

// // const NotificationMessage = () => {
// //   const renderItem = ({ item }) => (
// //     <View style={styles.screen}>
// //       <View style={styles.container}>
// //         <View>
// //           <Text style={styles.alert}>{item.alert}</Text>
// //         </View>

// //         <View>
// //           <Text style={styles.para}>{item.para}</Text>
// //         </View>

// //         <View style={styles.button}>
// //           <View>
// //             <Image source={require('../assets/next.png')} style={styles.next} />
// //           </View>

// //           <View>
// //             <Text style={styles.text}>View More</Text>
// //           </View>
// //           <View>
// //             <Image source={require('../assets/back.png')} style={styles.back} />
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   );

// //   return (
// //     <FlatList
// //       data={messages}
// //       renderItem={renderItem}
// //       keyExtractor={(item) => item.id}
// //       horizontal
// //       pagingEnabled
// //       showsHorizontalScrollIndicator={false}
// //     />
// //   );
// // };

// // export default NotificationMessage;

// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     width: '90%',
    
// //   },
// //   container: {
// //     borderWidth: 1,
// //     marginHorizontal: 10,
// //     padding: 20,
// //     borderRadius: 20,
// //     backgroundColor: '#fff',
// //     justifyContent: 'center',
// //     // marginTop: 5,
// //     marginBottom:70,
// //     marginLeft: 20,
// //     borderColor: '#00378f',
// //     width: 370, // Adjust the width as needed
// //     right:15,
// //     marginVertical:30
// //   },
// //   alert: {
// //     fontWeight: 'bold',
// //     fontSize: 18,
// //     backgroundColor: '#1D95FF',
// //     padding: 6,
// //     borderRadius: 20,
// //     paddingHorizontal: 15,
// //     color: '#fff',
// //     width: '50%',
// //   },
// //   para: {
// //     padding: 5,
// //   },
// //   button: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   next: {
// //     width: 20,
// //     height: 20,
// //     backgroundColor: '#FFB040',
// //     padding: 18,
// //     borderRadius: 10,
// //   },
// //   back: {
// //     width: 20,
// //     height: 20,
// //     backgroundColor: '#FFB040',
// //     padding: 18,
// //     borderRadius: 10,
// //   },
// //   text: {
// //     backgroundColor: '#FFB040',
// //     padding: 10,
// //     paddingHorizontal: 50,
// //     borderRadius: 20,
// //   },
// // });


// import * as React from 'react';
// import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

// // Initial messages
// const initialMessages = [
//   {
//     id: '1',
//     alert: 'Weather Alert 1',
//     para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     id: '2',
//     alert: 'Weather Alert 2',
//     para: 'Another weather alert message.',
//   },
// ];

// const NotificationMessage = ({ newNotification }: { newNotification: string | null }) => {
//   const [messages, setMessages] = React.useState(initialMessages);

//   // Update the messages list when a new notification is received
//   React.useEffect(() => {
//     if (newNotification) {
//       const newMessage = {
//         id: Math.random().toString(), // Generate unique ID
//         alert: 'New Weather Alert',
//         para: newNotification,
//       };
//       setMessages((prevMessages) => [newMessage, ...prevMessages]); // Add new message at the top
//     }
//   }, [newNotification]);

//   const renderItem = ({ item }: any) => (
//     <View style={styles.screen}>
//       <View style={styles.container}>
//         <Text style={styles.alert}>{item.alert}</Text>
//         <Text style={styles.para}>{item.para}</Text>

//         <View style={styles.button}>
//           <Image source={require('../assets/next.png')} style={styles.next} />
//           <Text style={styles.text}>View More</Text>
//           <Image source={require('../assets/back.png')} style={styles.back} />
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <FlatList
//       data={messages}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };

// export default NotificationMessage;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '90%',
//   },
//   container: {
//     borderWidth: 1,
//     marginHorizontal: 10,
//     padding: 20,
//     borderRadius: 20,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     marginBottom: 70,
//     marginLeft: 20,
//     borderColor: '#00378f',
//     width: 370,
//     right: 15,
//     marginVertical: 80,
//   },
//   alert: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     backgroundColor: '#1D95FF',
//     padding: 6,
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     color: '#fff',
//     width: '50%',
//   },
//   para: {
//     padding: 5,
//   },
//   button: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   next: {
//     width: 20,
//     height: 20,
//     backgroundColor: '#FFB040',
//     padding: 18,
//     borderRadius: 10,
//   },
//   back: {
//     width: 20,
//     height: 20,
//     backgroundColor: '#FFB040',
//     padding: 18,
//     borderRadius: 10,
//   },
//   text: {
//     backgroundColor: '#FFB040',
//     padding: 10,
//     paddingHorizontal: 50,
//     borderRadius: 20,
//   },
// });


import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Dimensions, PixelRatio } from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
const scale = width / 375; // 375 is a base screen width for scaling
const normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const initialMessages = [
  {
    id: '1',
    alert: 'Weather Alert 1',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '2',
    alert: 'Weather Alert 2',
    para: 'Another weather alert message.',
  },
];

const NotificationMessage = ({ newNotification }) => {
  const [messages, setMessages] = React.useState(initialMessages);

  React.useEffect(() => {
    if (newNotification) {
      const newMessage = {
        id: Math.random().toString(),
        alert: 'New Weather Alert',
        para: newNotification,
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    }
  }, [newNotification]);

  const renderItem = ({ item }) => (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.alert}>{item.alert}</Text>
        <Text style={styles.para}>{item.para}</Text>

        <View style={styles.button}>
          <Image source={require('../assets/next.png')} style={styles.icon} />
          <Text style={styles.text}>View More</Text>
          <Image source={require('../assets/back.png')} style={styles.icon} />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default NotificationMessage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1, // 90% of screen width
  },
  container: {
    borderWidth: 1,
    marginHorizontal: normalize(10),
    padding: normalize(20),
    borderRadius: normalize(20),
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: normalize(50),
    borderColor: '#00378f',
    width: width * 0.97, // 85% of screen width
  },
  alert: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    backgroundColor: '#1D95FF',
    padding: normalize(6),
    borderRadius: normalize(20),
    paddingHorizontal: normalize(15),
    color: '#fff',
    width: '50%',
  },
  para: {
    padding: normalize(5),
    fontSize: normalize(14),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    tintColor: '#FFB040',
  },
  text: {
    backgroundColor: '#FFB040',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(40),
    borderRadius: normalize(20),
    fontSize: normalize(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
