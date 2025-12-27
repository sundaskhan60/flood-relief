import { Feather } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View, Animated, Dimensions } from 'react-native';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75; // Matches your w-3/4 (75%)

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  // 1. Setup Animation Values
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // 2. Control Animations based on isOpen prop
  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -SIDEBAR_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen]);

  const menuItems = [
    { name: 'Dashboard', icon: 'grid', active: true },
    { name: 'Map', icon: 'map', active: false },
    { name: 'Alerts', icon: 'alert-triangle', active: false },
    { name: 'SOS Requests', icon: 'rss', active: false },
    { name: 'Devices', icon: 'cpu', active: false },
    { name: 'Settings', icon: 'settings', active: false },
  ];

  return (
    <View className="absolute inset-0 z-[100] flex-row" pointerEvents={isOpen ? 'auto' : 'none'}>
      {/* Animated Background Overlay */}
      <Animated.View 
        style={{ opacity: fadeAnim }}
        className="absolute inset-0 bg-black/40"
      >
        <Pressable className="flex-1" onPress={onClose} />
      </Animated.View>

      {/* Animated Sidebar Content */}
      <Animated.View 
        style={{ 
          transform: [{ translateX: slideAnim }],
          width: SIDEBAR_WIDTH 
        }}
        className="bg-white h-full pt-12 shadow-2xl"
      >
        <View className="flex-row items-center justify-between px-6 mb-8">
          <Text className="text-xl font-bold text-gray-800">Menu</Text>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <ScrollView className="px-4">
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index}
              className={`flex-row items-center p-4 rounded-xl mb-2 ${item.active ? 'bg-blue-50' : ''}`}
            >
              <Feather 
                name={item.icon as any} 
                size={20} 
                color={item.active ? '#2563EB' : '#6B7280'} 
              />
              <Text className={`ml-4 text-base ${item.active ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity className="flex-row items-center p-6 border-t border-gray-100 mb-5">
          <Feather name="log-out" size={20} color="#EF4444" />
          <Text className="ml-4 text-red-500 font-semibold">Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Sidebar;