


import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const messages = [
  {
    id: '1',
    alert: 'Weather Alert 1',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores, quis aut cupiditate itaque earum ratione architecto, molestias magnam iste, dolor laborum est ullam tempora tenetur voluptas impedit alias at.',
  },
  {
    id: '2',
    alert: 'Weather Alert 2',
    para: 'Another weather alert message. This is the second message in the queue.',
  },
  {
    id: '3',
    alert: 'Weather Alert 3',
    para: 'Yet another weather alert message. This is the third message in the queue.',
  },
];

const NotificationMessage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text style={styles.alert}>{item.alert}</Text>
        </View>

        <View>
          <Text style={styles.para}>{item.para}</Text>
        </View>

        <View style={styles.button}>
          <View>
            <Image source={require('../assets/next.png')} style={styles.next} />
          </View>

          <View>
            <Text style={styles.text}>View More</Text>
          </View>
          <View>
            <Image source={require('../assets/back.png')} style={styles.back} />
          </View>
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
    width: '90%',
    
  },
  container: {
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // marginTop: 5,
    marginBottom:70,
    marginLeft: 20,
    borderColor: '#00378f',
    width: 370, // Adjust the width as needed
    right:15,
    marginVertical:30
  },
  alert: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#1D95FF',
    padding: 6,
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
    width: '50%',
  },
  para: {
    padding: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  next: {
    width: 20,
    height: 20,
    backgroundColor: '#FFB040',
    padding: 18,
    borderRadius: 10,
  },
  back: {
    width: 20,
    height: 20,
    backgroundColor: '#FFB040',
    padding: 18,
    borderRadius: 10,
  },
  text: {
    backgroundColor: '#FFB040',
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
});