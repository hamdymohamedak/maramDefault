import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import FeedBackDoctorImg from "./imgs/doctorILLustrator.png";
import bg2 from "./imgs/b2g.png";
import { AntDesign } from "@expo/vector-icons";

const FeedBack = () => {
  const [feedbackInputValue, setFeedbackInputValue] = useState("");
  handleEvent = (value) => {
    setFeedbackInputValue(value);
  };
  handleSubmitEvent = () => {
    if (feedbackInputValue.length > 1) {
      const apiUrl = `https:api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=FeedBack:${feedbackInputValue}`;
      fetch(apiUrl, {
        method: "POST",
      });
    } else if (feedbackInputValue.length === 1) {
      alert("كلمه غير مفهومه برجاء اعاده المحاوله");
    }
  };
  let [starStyle, setStartStyle] = useState("white");
  let [starType, setStarType] = useState("staro");
  handleAllColor = () => {
    setStartStyle("rgb(0, 88, 171)");
    setStarType("star");
    let Value = 5;
    const apiUrl = `https:api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=FeedBack:${feedbackInputValue} Stars: ${Value}`;
    fetch(apiUrl, {
      method: "POST",
    });
    alert("Thanks for your feedback 5 Stars");
  };
  return (
    <ImageBackground source={bg2} style={styles.backgroundImage}>
      <View style={styles.parent}>
        <Image source={FeedBackDoctorImg} style={styles.FeedBackDoctorImg} />
        <Text style={styles.feedBackTitleStyle}>Please type your feedback</Text>
        <TextInput
          onChangeText={handleEvent}
          style={styles.feedBackInputStyling}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            margin: 10,
          }}
        >
          اكتب عدد النجوم
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 20, gap: 20 }}>
          <AntDesign name={starType} size={24} color={starStyle} />
          <AntDesign name={starType} size={24} color={starStyle} />
          <AntDesign name={starType} size={24} color={starStyle} />
          <AntDesign
            onPress={handleAllColor}
            name={starType}
            size={24}
            color={starStyle}
          />
        </View>
        <Button onPress={handleSubmitEvent} title="Submit" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  feedBackInputStyling: {
    backgroundColor: "#AAA",
    width: 300,
    height: 50,
    borderRadius: 11,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  feedBackTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  FeedBackDoctorImg: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", 
  },
});

export default FeedBack;
