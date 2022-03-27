import React from "react";
import { Text, View, Image } from "react-native";

const WeatherDetails = ({ weatherData }) => {
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
        {weatherData.daily.slice(1).map((weather, weatherIdx, arr) => (
          <View
            key={`weather-details-${weatherIdx}`}
            style={{
              paddingVertical: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                paddingVertical: 8,
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 12,
                }}
              >
                {new Date(weather.dt * 1000).toLocaleDateString()} -{" "}
                {weather.weather[0].description}
              </Text>
              <View
                style={{
                  marginTop: 15,
                  marginBottom: 15,

                  borderBottomColor: "lightgray",
                  borderBottomWidth: 1,
                }}
              />

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </View>

              <Text
                style={{ fontFamily: "Poppins_700Bold", textAlign: "center" }}
              >
                {weather.temp.max}°/{weather.temp.min}° · {weather.pressure}p ·{" "}
                {weather.humidity}% · {weather.clouds}c · {weather.uvi}uvi
              </Text>

              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  textAlign: "center",
                }}
              >
                SUN{" "}
                {new Date(weather.sunrise * 1000)
                  .toString()
                  .split(" ")[4]
                  .substring(0, 5)}
                /
                {new Date(weather.sunset * 1000)
                  .toString()
                  .split(" ")[4]
                  .substring(0, 5)}{" "}
                · MOON{" "}
                {new Date(weather.moonrise * 1000)
                  .toString()
                  .split(" ")[4]
                  .substring(0, 5)}
                /
                {new Date(weather.moonset * 1000)
                  .toString()
                  .split(" ")[4]
                  .substring(0, 5)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

export default WeatherDetails;
