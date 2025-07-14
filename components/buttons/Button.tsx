import React from "react";
import { Pressable, Text } from "react-native";

interface IProps {
  isLoading?: boolean;
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
}

function Button({ isLoading, title, onPress, disabled }: IProps) {
  return (
    <Pressable
      className={`bg-blue-500 rounded px-4 py-2 w-80 h-12  ${disabled ? "opacity-50" : "active:bg-blue-600 "} `}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-white text-center leading-8 font-semibold">
        {title}
      </Text>
    </Pressable>
  );
}

export default Button;
