import { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import welcomeImage from "./assets/welcome.png";
import dreamImage from "./assets/dream.png";
import errorImage from "./assets/error.png";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/dev";

import * as Location from "expo-location";

const tokens = {
  aqi: "f6082c912b8ae18ca6ee21c2c32829c53d953e88",
  weather: "99c6f94afac6ff2e3b407e029c8de3a7",
};

const Stack = createNativeStackNavigator();

const Loading = ({
  message = `We're getting your location,
 Hold on tight!`,
}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 15,
            textAlign: "center",
            width: "100%",
            marginTop: -100,
            paddingBottom: 20,
          }}
        >
          {message}
        </Text>

        <View style={{ paddingTop: 20 }}>
          <ActivityIndicator size="large" />
        </View>

        <Image
          source={welcomeImage}
          style={{
            width: 300,
            height: 300,
            position: "absolute",

            right: 0,
            bottom: 0,
          }}
        />
      </View>
    </>
  );
};

const Error = ({ errorMessage }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 70,
            fontFamily: "Poppins_500Medium",
            fontSize: 10,
            textAlign: "right",
            paddingRight: 10,
            width: "100%",
          }}
        >
          * To fix location permission error,{"\n"} please allow location access
          for this app in the settings.
        </Text>

        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 15,
            textAlign: "center",
            width: "100%",
            marginTop: -100,
            paddingBottom: 20,
          }}
        >
          An Error has occured: {"\n"}
          {errorMessage}
        </Text>

        <Image
          source={errorImage}
          style={{
            width: 300,
            height: 300,
            position: "absolute",

            right: 0,
            bottom: 0,
          }}
        />
      </View>
    </>
  );
};

const Home = () => {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);

  const storeStorageData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      Alert.alert("Something went wrong whilst saving storage data :/");
    }
  };

  const getStorageData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      } else {
        return false;
      }
    } catch (e) {
      // error reading value
      Alert.alert("Something went wrong whilst reading storage data :/");
    }
  };

  useEffect(async () => {
    const location = await getStorageData("@location");
    if (location) {
      setLocation(location);
    } else {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        storeStorageData("@location", location);
        setLocation(location);
      })();
    }
  }, []);

  useEffect(async () => {
    if (location) {
      await getData();
    }
    return () => {};
  }, [location]);

  const getData = async () => {
    const {
      coords: { latitude, longitude },
    } = location;

    const [airQualityData, weatherData] = await Promise.all([
      getAirQuality(latitude, longitude, tokens.aqi),
      getWeather(latitude, longitude, tokens.weather),
    ]);

    setAirQualityData(airQualityData);
    setWeatherData(weatherData);
  };

  const getAirQuality = async (lat, lon, token) => {
    const res = await fetch(
      `https://api.waqi.info/feed/geo:${lat};${lon}/?token=${token}`
    ).then((res) => res.json());
    return res;
  };
  const getWeather = async (lat, lon, token) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${token}`
    ).then((res) => res.json());
    return res;
  };

  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <>
        {!errorMsg ? (
          location && weatherData && weatherData ? (
            <>
              <SafeAreaView
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <ScrollView
                  style={{
                    height: "100%",
                    paddingTop: 10,
                    paddingLeft: 25,
                    paddingRight: 25,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      height: "100%",
                      backgroundColor: "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "baseline",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Poppins_700Bold",
                          fontSize: 25,
                        }}
                      >
                        {weatherData.name}
                      </Text>
                      <FontAwesome5
                        style={{ marginLeft: 10 }}
                        name="location-arrow"
                        size={20}
                        color="black"
                      />
                    </View>

                    <View
                      style={{
                        flex: 1,
                        marginTop: 10,
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Poppins_500Medium",
                        }}
                      >
                        {weatherData.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Poppins_500Medium",
                        }}
                      >
                        {weatherData.name}
                      </Text>
                    </View>

                    <Image
                      source={dreamImage}
                      style={{
                        width: "100%",
                        // Without height undefined it won't work
                        height: undefined,
                        // figure out your image aspect ratio
                        aspectRatio: 135 / 76,
                      }}
                    />

                    <Text>
                      Air Quality Data: {JSON.stringify(airQualityData)}
                    </Text>

                    <Text>Weather Data: {JSON.stringify(weatherData)}</Text>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </>
          ) : (
            <Loading />
          )
        ) : (
          <Error errorMessage={errorMsg} />
        )}
      </>
    );
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
