import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import bg from "./imgs/bg.png";
import Masr from "./imgs/Egypt-insurance.jpg";
import BankQahera from "./imgs/bank.jpg";
import AboQer from "./imgs/aboQer.jpeg";
import Betrol from "./imgs/betrol.jpeg";
import BetroGaz from "./imgs/betroGaz.jpg";
import Axa from "./imgs/Xsa.png";
const Contracts = () => {
  return (
    <View style={styles.parent}>
      <ImageBackground style={styles.image} source={bg}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 25 }}>
            التعاقدات
          </Text>
          <View style={styles.scrollContainer}>
            <View style={styles.object}>
              <Image style={styles.imageStyle} source={Masr} />
              <Text style={styles.textStyle}>مصر للتامين</Text>
            </View>
            <View style={styles.object}>
              <Image style={styles.imageStyle} source={BankQahera} />
              <Text style={styles.textStyle}>بنك القاهره</Text>
            </View>
            <View style={styles.object}>
              <Image style={styles.imageStyle} source={AboQer} />
              <Text style={styles.textStyle}>ابوقير للاسمده</Text>
            </View>
            <View style={styles.object}>
              <Image style={styles.imageStyle} source={Betrol} />
              <Text style={styles.textStyle}>اسكندريه للبترول</Text>
            </View>
            <View style={styles.object}>
              <Image style={styles.imageStyle} source={BetroGaz} />
              <Text style={styles.textStyle}>بتروجاز</Text>
            </View>
            <View style={styles.object}>
              <Image style={styles.imageStyle} source={Axa} />
              <Text style={styles.textStyle}>شركه تامين Axa</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  object: {
    borderRadius: 30,
    opacity: 1,
    minHeight: 200,
    width: 170,
    margin: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  imageStyle: {
    height: 150,
    width: 130,
    borderRadius: 20,
    marginBottom: 10,
    resizeMode: "contain",
  },
  textStyle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

export default Contracts;
