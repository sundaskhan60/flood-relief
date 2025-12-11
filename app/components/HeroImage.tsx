import React from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Boat = require("./boat1.png"); // <-- use require for PNG

const HeroImage = () => {
  return (
    <LinearGradient
      colors={["#33B3FF", "#0040B0"]}
      className="items-center justify-center w-full py-20"
    >
      <View className="relative w-full items-center justify-center">
        {/* Boat image positioned higher */}
        <Image
          source={Boat}
          style={{
            width: 200,
            height: 100,
            position: "absolute",
            top: -100, // moved more upwards
          }}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

export default HeroImage;
