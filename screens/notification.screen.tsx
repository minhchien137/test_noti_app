// screens/NotificationScreen.js
import React from "react";
import { View, Text } from "react-native";

export default function NotificationScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-green-100">
      <Text className="text-3xl font-bold text-green-800">
        Thông báo của bạn
      </Text>
      <Text className="text-lg mt-2 text-green-600">
        Bạn có 3 thông báo mới.
      </Text>
    </View>
  );
}
