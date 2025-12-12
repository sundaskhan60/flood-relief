import React from "react";
import { Image, View } from "react-native";

const Boat = require("./boat1.png");

const HeroImage = () => {
  return (
    <View className="w-full items-center justify-center bg-[#0A46FF] py-20">
      <View className="relative w-full items-center justify-center">
        <Image
          source={Boat}
          style={{
            width: 200,
            height: 100,
            position: "absolute",
            top: -70,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default HeroImage;
