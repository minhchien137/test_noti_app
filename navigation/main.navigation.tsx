import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home.screen";
import NotificationScreen from "../screens/notification.screen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "home";
          if (route.name === "Notifications") iconName = "bell";
          // @ts-ignore
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
