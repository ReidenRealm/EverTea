import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FinancialTracker from './FinancialTracker';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FinancialTracker" component={FinancialTracker} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
