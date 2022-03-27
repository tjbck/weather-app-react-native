import React from "react";
import { Text, View, Image } from "react-native";

const HourlyWeather = ({ hourlyWeather }) => {
  return (
    <>
      <View
        style={{
          marginBottom: 5,
          borderBottomColor: "lightgray",
          borderBottomWidth: 1,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {hourlyWeather.slice(1, 7).map((weather, weatherIdx) => (
          <View
            key={weatherIdx}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexBasis: "auto",
              width: `${100 / 6}%`,
              paddingHorizontal: 2,
            }}
          >
            <Text
              style={{ textAlign: "center", fontFamily: "Poppins_500Medium" }}
            >
              {new Date(weather.dt * 1000).getHours() + ":00"}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
              }}
            >
              {weather.weather[0].description}
            </Text>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
              }}
              style={{
                width: 50,
                height: 50,
              }}
            />

            <Text
              style={{
                textAlign: "center",
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
              }}
            >
              {Math.round(weather.temp * 10) / 10}°
            </Text>
          </View>
        ))}
      </View>
      <View
        style={{
          marginTop: 8,
          marginBottom: 17,
          borderBottomColor: "lightgray",
          borderBottomWidth: 1,
        }}
      />
    </>
  );
};

export default HourlyWeather;
