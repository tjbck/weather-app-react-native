import React from "react";
import errorImage from "../assets/error.png";

import { Text, View, Image } from "react-native";

const Error = ({ errorMessage }) => {
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
            position: "absolute",
            top: 70,
            fontFamily: "Poppins_500Medium",
            fontSize: 10,
            textAlign: "right",
            paddingRight: 10,
            width: "100%",
          }}
        >
          * To fix location permission error,{"\n"} please allow location access
          for this app in the settings.
        </Text>

        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 15,
            textAlign: "center",
            width: "100%",
            marginTop: -100,
            paddingBottom: 20,
          }}
          testID="error-message"
        >
          An Error has occured: {"\n"}
          {errorMessage}
        </Text>

        <Image
          source={errorImage}
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

export default Error;
