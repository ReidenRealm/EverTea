import * as React from 'react';
import { View, StyleSheet, AppState, PermissionsAndroid, ToastAndroid, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WeatherUpperHome from './weather-upper-page/WeatherUpperHome';
import axios from 'axios';
import { getMessaging, getToken } from "@react-native-firebase/messaging";
import Toast from 'react-native-toast-message';
import Geolocation from "react-native-geolocation-service";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from '@react-native-firebase/app';
import DownPageHome from './weather-down-page/DownPageHome';

// Initialize Firebase here, before using anything from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcE2GSC2frttEKEqtvb3urgET5GpUyP3Y",
  authDomain: "advancedweatherforecastapp.firebaseapp.com",
  projectId: "advancedweatherforecastapp",
  storageBucket: "advancedweatherforecastapp.firebasestorage.app",
  messagingSenderId: "597952832163",
  appId: "1:597952832163:android:8cf7ce9af5fcb8b3ff5516",
};

const saveTokenManually = async () => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdW5ldGhAZ21haWwuY29tIiwiaWF0IjoxNzQyNzIyNzk2LCJleHAiOjE3NDI3MjYzOTZ9.kcyg-iop01QIhWN0Ja_kKOL6a7zpryI5rbxUExAr4QE";
  await AsyncStorage.setItem("jwtToken", token);
  console.log("✅ Token saved successfully!")
};

// Initialize Firebase only if not already initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const notificationMessage = getMessaging(); // Now that Firebase is initialized, you can safely call this


const App = (() => {


  const [fcmToken, setFcmToken] = React.useState<String | null>(null);
  const [loading, setLoading] = React.useState(false);
  const appState = React.useRef(AppState.currentState);

  const [isLocationFetching, setIsLocationFetching] = React.useState(false);

  saveTokenManually(); 

  const appSate = React.useRef(AppState.currentState);



  // Request notification permission
  React.useEffect(() => {
    requestUserPermission();
  }, []);

  // ✅ Request Notification Permission (Updated)
  const requestUserPermission = async () => {
    try {
      const messagingInstance = getMessaging(); // Now Firebase is initialized
      const authStatus = await messagingInstance.requestPermission();
      console.log("✅ Notification Permission Status:", authStatus);
      getFCMToken();
     
      
    } catch (error) {
      console.error("❌ Firebase Messaging Error:", error);
      Toast.show({
        type: "error",
        text1: "Firebase Error",
      });
    }
  };

  React.useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      console.log("App state changed:", nextAppState);  // *Log the app state change* for debugging

      // *Prevent loop by adding a flag to only fetch once*
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        console.log("🔄 App refreshed, fetching location...");
        if (!isLocationFetching) {  // Check if location is already being fetched
          Toast.show({
            type: 'success',
            text1: '🔄 App refreshed, fetching location...',
            position: 'top',
          });
          setIsLocationFetching(true);  // Set flag to true to prevent repeated calls
          getLocationAndSend();
          console.log("called method------------------")
        }
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener("change", handleAppStateChange);
    return () => subscription.remove();  // Cleanup the event listener on unmount
  }, [isLocationFetching]);  // Re-run only when isLocationFetching changes

  // Retrieve FCM token
  const getFCMToken = async () => {
    try {
      const token = await getToken(notificationMessage);
      if (token) {
        console.log("✅ FCM Token:", token);
        Toast.show({
          type: 'success',
          text1: '✅ FCM Token',
          position: 'top',
        });
        setFcmToken(token);
        // console.log("Saved..........................................");
        console.log(fcmToken);
        
      } else {
        console.log("❌ No FCM Token retrieved.");
        Toast.show({
          type: 'error',
          text1: '❌ No FCM Token retrieved.',
          position: 'top',
        });
      }
    } catch (error) {
      console.log("❌ Error getting FCM token:", error);
    }
  };

  // Request location permission and get location
  const getLocationAndSend = async () => {
    setLoading(true);

    // Request location permission
    const granted = await requestLocationPermission();

    if (!granted) {
      console.log("❌ Location permission denied.");
      Toast.show({
        type: 'error',
        text1: '❌ Location permission denied.',
        position: 'top',
      });
      setIsLocationFetching(false);
      return;
    }


    const token = await AsyncStorage.getItem("jwtToken");
  
    if(!token){
      console.log("❌ No JWT Token Found!");
      setLoading(false);
      return;
    }


    if (!fcmToken) {
      console.log("❌ FCM Token is not available yet.");
      Toast.show({
        type: 'error',
        text1: '❌ FCM Token is not available yet.',
        position: 'top',
      });
      return;
    }

    // Get current location
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("lat ", latitude, "long: ", longitude);

        try {
          const response = await axios.post("http://172.20.10.4:8080/api/weather/location", {
            fcmToken,
            latitude,
            longitude,
          },{
            headers:{
              Authorization: `Bearer ${token}`,
              "connect-type" : "application/json"
            },
          });

          console.log("✅ Weather Data", JSON.stringify(response.data));
        } catch (error) {
          console.error("❌ Error sending location data:", error);
          Toast.show({
            type: 'error',
            text1: '❌ Error sending location data:',
            position: 'top',
          });
        } finally {
          setLoading(false);
          setIsLocationFetching(false);
        }
      },
      (error) => {
        console.log("❌ Geolocation Error: ", error);
        Toast.show({
          type: 'error',
          text1: '❌ Geolocation Error:',
        });
        setLoading(false);
        setIsLocationFetching(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // const openAppSettings = () => {
  //   Linking.openSettings().catch(() => {
  //     console.warn("Can't open settings");
  //   });
  // };

  const requestLocationPermission = async () => {
    try {
      // Request for ACCESS_FINE_LOCATION permission (foreground)
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app needs access to your location to show weather updates.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
  
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("✅Location permission granted");
  
        // If on Android 10 (API 29+) or above, request background location permission
        if (Platform.OS === 'android' && Platform.Version >= 29) {
          const backgroundGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
          );
          if (backgroundGranted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Background location permission granted");
            return true;
          } else {
            console.log("Background location permission denied");
            ToastAndroid.show('Background location permission is required for this app to function properly.', ToastAndroid.LONG);
            return false;
          }
        } else {
          return true;  // No need for background location on Android below API 29
        }
      } else {
        console.log("Location permission denied");
        ToastAndroid.show('Location permission is required to use this app.', ToastAndroid.LONG);
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };


  return (
    <LinearGradient
      colors={["#E2F2FF", "#1D95FF"]} // Converted colors
      start={{ x: 0, y: 0 }} // Adjusting to mimic the 165deg angle
      end={{ x: 0.5, y: 1 }}
    >
      <Toast />
      <WeatherUpperHome />
      <DownPageHome/>
      {/* <View style={styles.container}>
      </View> */}
    </LinearGradient>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {}
});
