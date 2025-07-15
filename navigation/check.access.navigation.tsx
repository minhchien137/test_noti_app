import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkAccess } from "../api/api/auth/auth";

export default function CheckAccess({ navigation }: { navigation: any }) {
  useEffect(() => {
    const checkLogin = async () => {
      const access_token = await AsyncStorage.getItem("access_token");
      if (access_token) {
        // @ts-ignore
        const res: { status: boolean; userData: any } = await checkAccess();

        console.log(res);

        if (res) {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: "Main",
                params: { screen: "Home", params: { userData: res } },
              },
            ],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "Auth" }],
          });
        }
        
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "Auth" }],
        });
      }
    };

    checkLogin();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
