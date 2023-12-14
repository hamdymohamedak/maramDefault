import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Image,
  Alert
} from "react-native";
import orderGif from "./imgs/dilevery.gif";
const Shods = () => {
  const [choose, setChoose] = useState("");
  const [choose2, setChoose2] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [order, setOrder] = useState("");

  const handleYes = () => setChoose("Yes");
  const handleNo = () => setChoose("No");
  const handleYes2 = () => setChoose2("Yes");
  const handleNo2 = () => setChoose2("No");

  const handleSubmit = async () => {
    if (phoneNumber.length === 11) {
      const apiEndpoint =
        "https://api.telegram.org/bot6596840857:AAHTCeO2wIV7fK0K9J_80v1e2_ght1qa6jk/sendMessage";

      const chatId = -1002013269485;

      const message = `الاسم: ${userName}\nالعنوان: ${address}\nالدور: ${floor}\nرقم الشقه: ${apartmentNumber}\nرقم الهاتف: ${phoneNumber}\nهل نرسل باقي الطلبات: ${choose}\nهل نرسل البديل: ${choose2}\nالطلب: ${order}`;

      try {
        const response = await fetch(
          `${apiEndpoint}?chat_id=${chatId}&text=${encodeURIComponent(
            message
          )}`,
          {
            method: "POST",
          }
        );

        if (response.ok) {
          // Show an alert if the API request was successful
          Alert.alert("Order Sended", "Your order has been successfully sent!");
        } else {
          // Show an alert if there was an error in the API request
          Alert.alert(
            "Error",
            "There was an error sending your order. Please try again."
          );
        }
      } catch (error) {
        // Show an alert if there was a network error
        Alert.alert(
          "Network Error",
          "Please check your internet connection and try again."
        );
      }
    } else {
      alert("تحقق من رقم الهاتف");
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={orderGif} style={styles.gitImg} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            width: "99%",
            marginBottom: 15,
          }}
        >
          تلك المعلومات سيحصل عليها المندوب الخاص بنا لسهوله توصيل الطلب{" "}
        </Text>
        <TextInput
          style={styles.inputs}
          placeholderTextColor="black"
          placeholder="Your Name (الاسم)"
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor="black"
          placeholder="Address (العنوان)"
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor="black"
          placeholder="(floor) الدور"
          onChangeText={(text) => setFloor(text)}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor="black"
          placeholder="(apartment number) رقم الشقه"
          onChangeText={(text) => setApartmentNumber(text)}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor="black"
          placeholder="Phone Number (رقم الهاتف)"
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor="black"
          placeholder="Order (طلبك)"
          onChangeText={(text) => setOrder(text)}
        />
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            في حال عدم توفر صنف معين من الطلبات الخاصة بك هل نرسل باقي الطلبات؟
          </Text>
          <View style={styles.buttonContainer}>
            <Button onPress={handleYes} title="نعم (Yes)" />
            <Button onPress={handleNo} title="لا (No)" />
          </View>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> {choose} </Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            في حال عدم توفر منتج من المنتجات التي قمت باختيارها هل نرسل بديل
            بنفس الماده الفعاله؟
          </Text>
          <View style={styles.buttonContainer}>
            <Button onPress={handleYes2} title="نعم (Yes)" />
            <Button onPress={handleNo2} title="لا (No)" />
          </View>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> {choose2} </Text>
      </View>
      <Button onPress={handleSubmit} title="Send  (ارسال)" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gitImg: {
    height: 200,
    width: 200,
  },
  inputs: {
    borderWidth: 2,
    borderColor: "#0766AD",
    width: "98%",
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  questionContainer: {
    width: "80%",
    alignItems: "center",
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default Shods;
