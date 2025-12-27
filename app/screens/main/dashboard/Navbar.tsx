import React from 'react';
import { View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

interface NavbarProps {
  onMenuPress: () => void;
}

const Navbar = ({ onMenuPress }: NavbarProps) => {
  // Calculate the top offset to avoid covering the system status bar
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 44; 

  return (
    <View 
      style={{ top: 0 }} 
      className="absolute left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    >
      {/* This View acts as a spacer for the Status Bar area */}
      <View style={{ height: statusBarHeight }} />

      {/* Actual Navbar Content */}
      <View className="flex-row items-center justify-between px-5 h-16">
        
        {/* Left Side: Hamburger + Logo Group */}
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={onMenuPress} 
            activeOpacity={0.7} 
            className="p-1 mr-3"
          >
            <Feather name="menu" size={24} color="#4B5563" />
          </TouchableOpacity>

          {/* Blue Star Logo positioned next to hamburger */}
          <View className="bg-blue-600 p-2 rounded-xl shadow-md shadow-blue-400">
            <MaterialCommunityIcons name="star" size={20} color="white" />
          </View>
        </View>

        {/* Right Side: Notifications & Profile */}
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-4 relative p-1">
            <Ionicons name="notifications-outline" size={24} color="#4B5563" />
            {/* Red Alert Dot */}
            <View className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          </TouchableOpacity>
          
          <TouchableOpacity className="p-1">
            <Feather name="user" size={24} color="#4B5563" />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Navbar;