import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text } from "react-native";
import Button from "../components/buttons/Button";
import { useRoute } from "@react-navigation/native";

export default function HomeScreen() {
  const route = useRoute();
  const { userData } = (route.params as { userData: any }) || {};
  return (
    <View className="flex-1 justify-center items-center bg-blue-100 p-4">
      <Text className="text-3xl font-bold text-blue-800 text-center">
        Chào mừng đến với Home! {userData?.name}
      </Text>
      <Text className="text-lg mt-2 text-blue-600">
        Đây là màn hình chính của bạn.
      </Text>
    </View>
  );
}
