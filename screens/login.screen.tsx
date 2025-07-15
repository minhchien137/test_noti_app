import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Button from "../components/buttons/Button";
import { login } from "../api/api/auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  // const navigation = useNavigation();
  // state
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // function
  const handleChangeInput = (type: string, value: string) => {
    switch (type) {
      case "username":
        setUserInfo({ ...userInfo, username: value });
        break;
      case "password":
        setUserInfo({ ...userInfo, password: value });
        break;
    }
  };

  const handleLogin = async () => {
    if (!userInfo.username || !userInfo.password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ tên người dùng và mật khẩu.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await login(userInfo.username, userInfo.password);
      console.log("Login response:", response);
      // @ts-ignore
      const accessToken = response.access_token;

      if (accessToken) {
        // Lưu accessToken vào AsyncStorage hoặc Context API
        await AsyncStorage.setItem("access_token", accessToken);
        setTimeout(() => {
          setIsLoading(false);
          setUserInfo({ username: "", password: "" }); // Reset input fields after login attempt
        }, 500);
        // navigation.navigate("Main");
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });
      } else {
        Alert.alert("Lỗi", "Đăng nhập không thành công. Vui lòng thử lại.");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Đăng nhập không thành công. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
      setUserInfo({ username: "", password: "" }); // Reset input fields after login attempt
    }
  };

  const handleLoginFake = async () => {
    // Giả lập đăng nhập thành công
    setIsLoading(true);
    await AsyncStorage.setItem(
      "access_token",
      `${userInfo.username}-${userInfo.password}-token`
    );
    setTimeout(() => {
      setIsLoading(false);
      setUserInfo({ username: "", password: "" }); // Reset input fields after login attempt
    }, 500);
    // navigation.navigate("Main");
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <Text className="text-3xl font-bold text-blue-800 mb-8">Đăng nhập</Text>
      <TextInput
        className="w-80 h-12 border border-gray-300 rounded px-4 mb-4 bg-white"
        placeholder="Tên người dùng"
        value={userInfo.username}
        onChangeText={(value) => handleChangeInput("username", value)}
        autoCapitalize="none"
      />
      <TextInput
        className="w-80 h-12 border border-gray-300 rounded px-4 mb-4 bg-white"
        placeholder="Mật khẩu"
        value={userInfo.password}
        onChangeText={(value) => handleChangeInput("password", value)}
        secureTextEntry
      />
      <Button
        title={isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
        onPress={handleLogin}
        disabled={isLoading}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
