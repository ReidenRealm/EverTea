import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

const HourlyData = ({ hourlyData }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.hourly}>
          <Image source={require("../assets/time.png")} style={styles.timeIcon} />
          <Text style={styles.hourText}>Hourly Weather</Text>
        </View>

        {/* Scrollable Hourly Data */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {hourlyData.map((item, index) => (
            <View style={styles.time} key={index}>
              <Text style={styles.text}>{item.time}</Text>
              <Image source={require("../assets/cloud.png")} style={styles.icon} />
              <Text style={styles.temp}>{item.temp}°C</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HourlyData;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#85A98A", // Box color
    paddingVertical: 20,
    borderRadius: 18,
    marginHorizontal: 20,
    // elevation: 10,
    overflow: "hidden", // Ensures content stays within the box
    marginBottom: 15,
  },
  scrollContainer: {
    flexDirection: "row",
    paddingHorizontal: 10, // Padding inside scroll area
  },
  time: {
    marginHorizontal: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    marginVertical: 5,
  },
  temp: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
  },
  hourly: {
    flexDirection: "row",
    width: "95%",
    borderBottomWidth: 1,
    borderColor: "grey",
    marginBottom: 10,
    marginLeft: 10,
    opacity: 0.6,
    paddingBottom: 5,
  },
  timeIcon: {
    width: 20,
    height: 20,
  },
  hourText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
