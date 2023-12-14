import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet, Button, Alert } from "react-native";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { getLocales } from 'expo-localization';
import startedImg from "./imgs/started.jpg";
const Home = ({ navigation }) => {
  useEffect(() => {
    const sendDeviceInfoToTelegram = async () => {
      try {
        const deviceModel =
          Constants.deviceName || Constants.deviceModel || "Unknown Device";

        // Access specific properties of Constants.platform
        const platformName = Constants.platform?.name || "Unknown Platform";
        const platformVersion =
          Constants.platform?.version || "Unknown Version";
        const androidVersion = Constants.systemVersion;
        const deviceBard = Device.brand;
        const brandVerstion = Device.deviceName;
        const MemorySize = Device.totalMemory;
        const MemoryValueToGB = MemorySize / Math.pow(1024, 3);
        const DeviceOsVerstion = Device.osVersion;
        const deviceLanguage = getLocales()[0].languageCode;

        const message = `New Visitor at MaramApp\nDeviceName: ${deviceModel}\ndevicePlatform: ${platformName} ${platformVersion}\nandroidVersion: ${androidVersion}\nBrand: ${deviceBard} \nbrandVerstion: ${brandVerstion}\nMemorySizeByBytes: ${MemorySize}\nMemorySizeByGB: ${MemoryValueToGB}GB  \nDeviceOsVerstion: ${DeviceOsVerstion}\n DeviceLanguage: ${deviceLanguage}`;

        const apiEndpoint = `https:api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=${encodeURIComponent(
          message
        )}`;

        const response = await fetch(apiEndpoint, {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Failed to send message to Telegram.");
        }
      } catch (error) {
        console.error("Error sending device info to Telegram:", error);
      }
    };

    sendDeviceInfoToTelegram();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={startedImg}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("Orders")}
            title="Get Started"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    marginHorizontal: 16,
  },
});

export default Home;
