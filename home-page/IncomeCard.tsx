import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";

const IncomeCard = () => {
  return(
    <SafeAreaView style= {styles.container}>

      <StatusBar barStyle= "dark-content" />
      {/* sub header */}
      <Text style={styles.subTopic}>My cards <Image
        source={require('../assets/arrow-left.png')}
        style={styles.arrow}
      /></Text>

      {/* Total Income Card */}
      <View style={styles.incomeCard}>
        <Text style={styles.cardTitle}>PLANTATION 01</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/more-horizontal.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.totalIncomeHeader}>Total Income</Text>
        <Text style={styles.totalIncome}>130,000 LKR</Text>

       <Text style={styles.rowContainer}>
       <View style={styles.incomeBox}>
          <Image
            source={require('../assets/low-arrow.png')}
            style={styles.lowArrowIcon}
          />
          <Text style={styles.incomeLabel}>INCOME</Text>
          <Text style={styles.incomeText}>+150,000 LKR</Text>
        </View>

        <View style={styles.expenceBox}>
          <Image
            source={require('../assets/high-arrow.png')}
            style={styles.lowArrowIcon}
          />
          <Text style={styles.expenceLabel}>EXPENCE</Text>
          <Text style={styles.expenceText}>-20,000 LKR</Text>
        </View>
       </Text>




      </View>



    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e8e6e6',
  },
  header: {
    padding: 15,
    alignItems: 'flex-end',
  },
  topic: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'relative',
    left: 90,
    bottom:50,
  },
  subTopic: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 32,
  },
  arrow: {
    height: 10,
    width: 20,
  },
  incomeCard: {
    backgroundColor: '#FFBC6C',
    margin: 15,
    borderRadius: 15,
    padding: 15,
    elevation: 10,
  },
  cardTitle: {
    fontSize: 15,
    color: '#ffffff',
    position: 'relative',
    left:200,

  },
  icon: {
    width: 30,
    height: 20,
    tintColor: 'green',
    position: 'absolute',
    left:315,
    bottom: 1,
    transform: [{rotate: "90 deg"}],
  },
  totalIncome: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profile: {
    height:45,
    width:45,
    borderRadius:20,
    elevation: 10,
  },
  totalIncomeHeader: {
    fontSize: 19,
    position: 'relative',
    color:'#f2dbbf',
    top: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
    right:0,
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  incomeBox:{
    backgroundColor: '#fff6ec',
    justifyContent:'center',
    borderRadius:20,
    margin:10,
    width:150,
    elevation:10,
  },
  lowArrowIcon: {
    height:40,
    width:45,
    marginRight:10,
    top:15,
    left:5,
  },
  incomeLabel:{
    fontSize:13,
    left:85,
    bottom:25,
    fontWeight: '500',
  },
  incomeText:{
    fontSize: 13,
    fontWeight: '500',
    left:52,
    bottom:25,
  },
  expenceBox: {
    backgroundColor: '#fff6ec',
    justifyContent: 'center',
    width: 160,
    borderRadius:20,
    margin:10,
    elevation:10,
  },
  expenceLabel: {
    fontSize:13,
    left:90,
    bottom:25,
    fontWeight: '500',
  },
  expenceText:{
    fontSize: 13,
    fontWeight: '500',
    left:75,
    bottom:25,
  },
});

export default IncomeCard;