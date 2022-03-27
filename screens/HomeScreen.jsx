import React from "react";

import { useState, useEffect, useCallback } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Loading from "../components/Loading";
import Error from "../components/Error";

import TopHero from "../components/home/TopHero";
import AirQuality from "../components/home/AirQuality";
import Forecast from "../components/home/Forecast";
import HourlyWeather from "../components/home/HourlyWeather";
import TitledCard from "../components/common/TitledCard";

const tokens = {
  aqi: "f6082c912b8ae18ca6ee21c2c32829c53d953e88",
  weather: "99c6f94afac6ff2e3b407e029c8de3a7",
};

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

const getAirQuality = async (lat, lon, token) => {
  const res = await fetch(
    `https://api.waqi.info/feed/geo:${lat};${lon}/?token=${token}`
  ).then((res) => res.json());
  return res;
};

const getWeather = async (lat, lon, token) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${token}`
  ).then((res) => res.json());
  return res;
};

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [geoLocationData, setGeoLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getDeviceLocation().then(() => setRefreshing(false));
  }, []);

  useEffect(async () => {
    const location = await getStorageData("@location");
    if (location) {
      setLocation(location);
    } else {
      await getDeviceLocation();
    }
  }, []);

  useEffect(async () => {
    if (location) {
      await getData();
    }
    return () => {};
  }, [location]);

  const getDeviceLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    storeStorageData("@location", location);
    setLocation(location);
    return;
  };

  const getData = async () => {
    const {
      coords: { latitude, longitude },
    } = location;

    const [airQualityData, weatherData, geoLocationData] = await Promise.all([
      getAirQuality(latitude, longitude, tokens.aqi),
      getWeather(latitude, longitude, tokens.weather),
      getGeoLocation(latitude, longitude, tokens.weather),
    ]);

    setAirQualityData(airQualityData);
    setWeatherData(weatherData);
    setGeoLocationData(geoLocationData);
  };

  const getGeoLocation = async (lat, lon, token) => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${token}`
    ).then((res) => res.json());

    if (refreshing) {
      Alert.alert(`Your location has been set to "${res[0].name}"`);
    }
    return res;
  };

  return (
    <>
      {!errorMsg ? (
        location && geoLocationData && weatherData && airQualityData ? (
          <>
            <View>
              <ScrollView
                style={{
                  height: "100%",
                }}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
                <TopHero
                  weatherData={weatherData}
                  geoLocationData={geoLocationData}
                />

                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    paddingVertical: 18,
                    backgroundColor: "#fff",
                  }}
                >
                  <HourlyWeather hourlyWeather={weatherData.hourly} />

                  <TitledCard
                    title={
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <View>
                          <Text
                            style={{
                              fontFamily: "Poppins_600SemiBold",
                            }}
                          >
                            Air Quality
                          </Text>
                        </View>

                        <View
                          style={{
                            backgroundColor: "#29A829",
                            borderRadius: 999,
                            paddingVertical: 3,
                            paddingHorizontal: 20,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "white",
                              fontFamily: "Poppins_500Medium",
                              fontSize: 10,
                            }}
                          >
                            {airQualityData.data.aqi > 50
                              ? airQualityData.data.aqi > 100
                                ? airQualityData.data.aqi > 150
                                  ? "Very Unhealthy"
                                  : "Unhealthy"
                                : "Moderate"
                              : "Good"}
                          </Text>
                        </View>
                      </View>
                    }
                    onPress={() =>
                      navigation.navigate("AirQuality", {
                        airQualityData,
                      })
                    }
                  >
                    <AirQuality airQualityData={airQualityData} />
                  </TitledCard>

                  <TitledCard
                    title="Weather Forecast"
                    onPress={() =>
                      navigation.navigate("Weather", {
                        weatherData,
                      })
                    }
                  >
                    <Forecast weatherData={weatherData} />
                  </TitledCard>
                </View>
              </ScrollView>
            </View>
          </>
        ) : (
          <Loading />
        )
      ) : (
        <Error errorMessage={errorMsg} />
      )}
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
