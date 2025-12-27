import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Welcome from './Welcome'; 
import Floodstatus from './Floodstatus';
import MovementStatus from './Movementstatus';
import Emergency from './Emergency';
import UserLocation from './UserLocation';
import SafetyTips from './SafetyTips';

const DashboardScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <Navbar onMenuPress={() => setIsMenuOpen(true)} />

      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ paddingTop: 110, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5">
          <Welcome />
        <Floodstatus />
          
          {/* 2. Replace the placeholder with the new component */}
         <MovementStatus/>

          {/* Next is the Emergency Assistance card */}
         {/* 2. Call the Emergency component */}
  <Emergency />

<UserLocation />

<SafetyTips />
        </View>
      </ScrollView>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </View>
  );
};

export default DashboardScreen;