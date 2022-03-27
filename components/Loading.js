import React from "react";
import welcomeImage from "../assets/welcome.png";

import { Text, View, Image, ActivityIndicator } from "react-native";

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
          testID="message"
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

export default Loading;
