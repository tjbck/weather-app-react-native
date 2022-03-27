import React from "react";
import { Text, View } from "react-native";
import TitledCard from "../common/TitledCard.js";

const AirQualityDetails = ({ airQualityData }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          paddingVertical: 10,
          paddingHorizontal: 15,
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
        <TitledCard title="Current Air Pollutents">
          <View style={{ paddingHorizontal: 5, paddingTop: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 11,
              }}
            >
              {Object.entries(airQualityData.data.iaqi)
                .map((pollutent) => [pollutent[0], pollutent[1].v])
                .reduce((a, e, i, arr) => {
                  return `${a}${e[0]} (${e[1]})${
                    arr.length - 1 !== i ? " · " : ""
                  }`;
                }, "")}
            </Text>
          </View>
        </TitledCard>

        {Object.keys(airQualityData.data.forecast.daily).map((pollutent) => (
          <TitledCard title={pollutent} key={pollutent}>
            <View style={{ paddingHorizontal: 5 }}>
              {airQualityData.data.forecast.daily[pollutent].map(
                (value, valueIdx) => (
                  <View
                    style={{ flex: 1, paddingVertical: 6 }}
                    key={`${pollutent}-${valueIdx}`}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "Poppins_600SemiBold",
                        fontSize: 11,
                      }}
                    >
                      {value.day} · avg {value.avg} · max {value.max} · min{" "}
                      {value.min}
                    </Text>
                  </View>
                )
              )}
            </View>
          </TitledCard>
        ))}
      </View>
    </>
  );
};

export default AirQualityDetails;
