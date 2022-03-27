import React from "react";

import { Text, View, Image } from "react-native";

import exploringImage from "../../assets/exploring.png";

const AirQuality = ({ airQualityData }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginVertical: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <Image
          source={exploringImage}
          style={{
            width: 100,
            height: 100,
            position: "absolute",

            right: 10,
            bottom: 0,
          }}
        />

        <View
          style={{
            paddingTop: 30,

            paddingBottom: 45,
          }}
        >
          <Text
            style={{
              fontSize: 45,
              textAlign: "center",
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            {airQualityData.data.aqi}
          </Text>

          <Text
            style={{
              fontSize: 10,
              textAlign: "center",
              fontFamily: "Poppins_500Medium",
            }}
          >
            Dominent Pollutent: {airQualityData.data.dominentpol}
          </Text>
        </View>
      </View>
    </>
  );
};

export default AirQuality;
