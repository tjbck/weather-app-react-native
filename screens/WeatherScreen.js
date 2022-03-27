import React from "react";
import { View, ScrollView } from "react-native";

import WeatherDetails from "../components/weather/WeatherDetails.js";

const WeatherScreen = ({ route }) => {
  const { weatherData } = route.params;

  return (
    <>
      <ScrollView>
        <View style={{ paddingHorizontal: 10 }}>
          <WeatherDetails weatherData={weatherData} />
        </View>
      </ScrollView>
    </>
  );
};

export default WeatherScreen;
