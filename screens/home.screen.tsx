import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <Text className="text-3xl font-bold text-blue-800">
        Chào mừng đến với Home!
      </Text>
      <Text className="text-lg mt-2 text-blue-600">
        Đây là màn hình chính của bạn.
      </Text>
    </View>
  );
}
