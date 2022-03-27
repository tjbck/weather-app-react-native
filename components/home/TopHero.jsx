import React from "react";

import {
  Platform,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const TopHero = ({ weatherData, geoLocationData, searchGeoLocation }) => {
  return (
    <ImageBackground
      source={{
        uri: `https://source.unsplash.com/random/?${
          weatherData.current.weather[0].description ?? ""
        }`,
      }}
      style={{
        borderRadius: 8,
        width: "100%",
        // Without height undefined it won't work
        height: undefined,
        // figure out your image aspect ratio
        aspectRatio: 3 / 2,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, .3)",
          paddingTop: 7,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              width: "100%",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              maxHeight: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                color: "white",
                fontSize: 20,
              }}
            >
              {geoLocationData[0]?.name ?? "Location Unknown"}
            </Text>
            <FontAwesome5
              style={{
                marginLeft: 10,
                color: "white",
              }}
              name="location-arrow"
              size={15}
              color="black"
            />
          </View>

          <View
            style={{
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins_500Medium",
              }}
            >
              {new Date(weatherData.daily[0].dt * 1000).toLocaleDateString()}
            </Text>
          </View>

          <View
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (Platform.OS !== "ios") {
                  Alert.alert(
                    "Alert prompt only works with IOS, please use an iphone!"
                  );
                }
                Alert.prompt(
                  "Search Location",
                  "Enter a city name!",
                  (cityName) => {
                    searchGeoLocation(cityName);
                  }
                );
              }}
            >
              <FontAwesome5 name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            alignItems: "flex-end",
            marginVertical: 20,

            justifyContent: "space-between",
          }}
        >
          <View style={{ alignSelf: "auto" }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 50,
                color: "white",
              }}
            >
              {Math.round(weatherData.current.temp * 10) / 10}°
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`,
              }}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: "white",
                textAlign: "right",
              }}
            >
              {weatherData.current.weather[0].description ?? ""}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: "white",
                textAlign: "right",
              }}
            >
              H:{Math.round(weatherData.daily[0].temp.max * 10) / 10}° L:
              {Math.round(weatherData.daily[0].temp.min * 10) / 10}°
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TopHero;
