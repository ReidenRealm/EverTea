import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native';

const IncomeExpenseTab = () => {
  const [selected, setSelected] = React.useState("income");
  return (
    <View style={[styles.container,
      {borderColor: selected === "income" ? "#008C5E" : "#FF3B30"}
    ]}>
      <View style={styles.toggleContainer}>
        {/* Income Button */}
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selected === "income" && { backgroundColor: "#008C5E" }
          ]}
          onPress={() => setSelected("income")}
        >
          <Text style={[styles.toggleText, selected === "income" && styles.activeText]}>
            INCOME
          </Text>
        </TouchableOpacity>

        {/* Expense Button */}
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selected === "expenses" && { backgroundColor: "#FF3B30" }
          ]}
          onPress={() => setSelected("expenses")}
        >
          <Text style={[styles.toggleText, selected === "expenses" && styles.activeText]}>
            EXPENSES
          </Text>
        </TouchableOpacity>
        
        
      </View>
    </View>
  );
};

export default IncomeExpenseTab;

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    marginVertical: 1,
    
  },
  toggleContainer:{
    flexDirection:'row',
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor: '#008C5E',
    borderRadius:25,
    padding:3,
  },
  toggleButton:{
    paddingVertical:14,
    alignItems:'center',
    borderRadius:20,
    paddingLeft:50,
    paddingRight:50,
  },
  toggleText:{
    fontSize:16,
    fontWeight:'bold',
    color:'#5a5a5a',
  },
  activeText:{
    color:'#fffff',
  }
});
