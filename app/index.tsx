import { Text, View } from "react-native";
import HomePage from "@/home-page/HomePage";

export default function Index() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e8e6e6',
      }}
    >
      <Text>
        <HomePage/>
      </Text>
    </View>
  );
}
