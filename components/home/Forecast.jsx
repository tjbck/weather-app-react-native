import React from "react";

import { Text, View, Image } from "react-native";

const Forecast = ({ weatherData }) => {
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
        <View style={{ flex: 1 }}>
          {weatherData.daily.slice(1).map((weather, weatherIdx, arr) => (
            <View key={`forecast-${weatherIdx}`} style={{ height: "auto" }}>
              <View
                style={{
                  paddingVertical: 3,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <View style={{ width: "15%" }}>
                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 12,
                    }}
                  >
                    {new Date(weather.dt * 1000).toString().split(" ")[0]}
                  </Text>
                </View>

                <View style={{ paddingRight: 50, width: "20%" }}>
                  <Image
                    source={{
                      uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                    }}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    L: {Math.round(weather.temp.min * 10) / 10}°
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    M: {Math.round(weather.temp.morn * 10) / 10}°
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    D: {Math.round(weather.temp.day * 10) / 10}°
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    H:{Math.round(weather.temp.max * 10) / 10}°
                  </Text>
                </View>
              </View>

              {weatherIdx !== arr.length - 1 && (
                <View
                  style={{
                    borderBottomColor: "lightgray",
                    borderBottomWidth: 1,
                  }}
                />
              )}
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default Forecast;
