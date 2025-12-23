import React, { useEffect, useRef } from "react";
import { Animated, Image, View, Easing } from "react-native";

const Boat = require("./boat1.png");

const HeroImage = () => {
  // Create animated value for horizontal position
  const moveX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Define the horizontal animation loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveX, {
          toValue: 50, // move 50px to the right
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(moveX, {
          toValue: -50, // move 50px to the left
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View className="w-full items-center justify-center bg-[#1A4BCC] py-20">
      <View className="relative w-full items-center justify-center">
        <Animated.Image
          source={Boat}
          style={{
            width: 200,
            height: 100,
            position: "absolute",
            top: -90,
            transform: [{ translateX: moveX }], // horizontal movement
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default HeroImage;
