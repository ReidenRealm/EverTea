import { Text, View } from "react-native";
import HomePage from "@/home-page/HomePage";
import ReportPage from "@/report-page/ReportPage";

export default function Index() {
  return (
    <View
      style={{
  
        backgroundColor: '#EEF6FD',
        margin:0, 
      }}
    >
      <Text>

        {/* <HomePage/> */}
        <ReportPage />
      </Text>
    </View>
  );
}
