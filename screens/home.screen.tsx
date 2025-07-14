import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text } from "react-native";
import Button from "../components/buttons/Button";

export default function HomeScreen() {
  const showToken = async () => {
    const token = await AsyncStorage.getItem("userToken");
    console.log("Access Token:", token);
  };
  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <Text className="text-3xl font-bold text-blue-800">
        Chào mừng đến với Home!
      </Text>
      <Text className="text-lg mt-2 text-blue-600">
        Đây là màn hình chính của bạn.
      </Text>
      <Button title="Show Token" onPress={showToken}></Button>
    </View>
  );
}
