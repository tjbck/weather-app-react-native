import React from "react";

import { Text, View, TouchableOpacity } from "react-native";

const TitledCard = ({ onPress = null, title, children }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            marginBottom: 4,
          }}
        >
          {title}
        </Text>

        <View
          style={{
            marginTop: 3,
            marginBottom: 3,
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
          }}
        />

        {onPress ? (
          <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
        ) : (
          <>{children}</>
        )}
      </View>
    </>
  );
};

export default TitledCard;
