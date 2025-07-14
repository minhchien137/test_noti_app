import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home.screen";
import NotificationScreen from "./screens/notification.screen";
import ProfileScreen from "./screens/profile.screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LoginScreen from "./screens/login.screen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = <FontAwesome name="home" size={size} color={color} />;
            } else if (route.name === "Notifications") {
              iconName = <FontAwesome name="bell" size={size} color={color} />;
            } else if (route.name === "Login") {
              iconName = <FontAwesome name="lock" size={size} color={color} />;
            }

            // Bạn có thể tùy chỉnh màu sắc và kích thước của icon
            return (
              <Text style={{ color: color, fontSize: size }}>{iconName}</Text>
            );
          },
          tabBarActiveTintColor: "blue", // Màu khi tab được chọn
          tabBarInactiveTintColor: "gray", // Màu khi tab không được chọn
          tabBarStyle: {
            backgroundColor: "#ffffff", // Nền của thanh tab
            borderTopWidth: 1,
            borderTopColor: "#e0e0e0",
            height: 60, // Chiều cao của thanh tab
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          headerShown: false, // Ẩn tiêu đề mặc định của màn hình
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
