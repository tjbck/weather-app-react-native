import React from "react";
import { View, Text, ScrollView } from "react-native";
import AirQualityDetails from "../components/airquality/AirQualityDetails.js";
import AirQuality from "../components/home/AirQuality.js";

const AirQualityScreen = ({ route }) => {
  const { airQualityData } = route.params;
  return (
    <>
      <ScrollView>
        <View style={{ paddingHorizontal: 10 }}>
          <AirQuality airQualityData={airQualityData} />
          <AirQualityDetails airQualityData={airQualityData} />
        </View>
      </ScrollView>
    </>
  );
};

export default AirQualityScreen;
