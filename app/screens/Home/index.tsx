import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


import Header from './Header';
import HeroImage from './HeroImage';
import WelcomeText from './WelcomeText';
import HomeButton from './HomeButton';

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <Header />
      <HeroImage />
      <WelcomeText />
    <HomeButton/>
    </ScrollView>
  );
};

export default HomeScreen;
