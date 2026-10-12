import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          headerShown: false,
          title: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          headerShown: false,
          title: "Workout",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="active-workout"
        options={{
          headerShown: false,
          title: "Active Workout",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clock-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          //   tabBarIcon: ({ color, size, user }) => (
          //     <Image source={user?.imageUrl ?? user?.externalAccounts[0]?.imageUrl ?? ""} className="w-6 h-6 rounded-full" />
          //   ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
