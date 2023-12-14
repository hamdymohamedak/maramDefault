import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Image } from "react-native";
import listGif from "./imgs/giphy.gif";

const Asks = () => {
  const [messageGroup, setMessageGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleMessage = () => {
    if (phoneNumber.length === 11 && messageGroup.length > 0) {
      const apiUrl = `https://api.telegram.org/bot6892791020:AAFFBpDx2_zZX1PI9p4_sogfnmIENmMucWM/sendMessage?chat_id=-4022156786&text=Message: ${messageGroup} %0AClient Phone Number: ${phoneNumber}`;

      fetch(apiUrl, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    } else {
      alert("ربما هناك خطا في رقم الهاتف او ان حقل الرساله فارغ تحقق من الامر ");
    }
  };

  return (
    <View style={styles.parent}>
      <Image source={listGif} style={styles.TitleImg} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          width: 300,
          marginTop: 20,
          color: "white",
        }}
      >
        اكتب الاستفسار الخاص بك
      </Text>
      {/* ... Other text components ... */}
      <TextInput
        onChangeText={(value) => setMessageGroup(value)}
        style={styles.firstInput}
        placeholder="اكتب استفسارك"
        placeholderTextColor={"white"}
      />
      <TextInput
        onChangeText={(value) => setPhoneNumber(value)}
        style={styles.firstInput}
        placeholder="اكتب رقم هاتفك ليتم التواصل معك"
        placeholderTextColor={"white"}
      />
      <Button onPress={handleMessage} title="send ( ارسال )" />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#040D12",
  },
  firstInput: {
    borderWidth: 2,
    borderColor: "#4477CE",
    width: "101%",
    height: 40,
    borderRadius: 0,
    padding: 10,
    margin: 20,
    color: "white",
    fontWeight: "bold",
  },
  TitleImg: {
    height: 200,
    width: 200,
    resizeMode: "cover",
  },
});

export default Asks;
