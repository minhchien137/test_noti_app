import React from "react";
import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-purple-100">
      <Text className="text-3xl font-bold text-purple-800">Hồ sơ cá nhân</Text>
      <Text className="text-lg mt-2 text-purple-600">
        Chào mừng bạn trở lại, User!
      </Text>
    </View>
  );
}
