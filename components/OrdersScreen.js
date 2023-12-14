import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

import drIbrahim from "./imgs/drIbrahim.jpg";
import drSaad from "./imgs/drSaad.jpg";
import maram from "./imgs/maram.jpg";
import khairyImg from "./imgs/khairy.jpg";
import SalehImg from "./imgs/saleh.jpg"

const doctorsData = [
  {
    key: "drIbrahim",
    image: drIbrahim,
    name: "Dr. Ibrahim",
    expertise: "Experience: 6 Years",
  },
  {
    key: "drSaad",
    image: drSaad,
    name: "Dr. Saad",
    expertise: "Experience: 10 Years",
  },
  {
    key: "drMostafa",
    image: maram,
    name: "Dr. Mostafa",
    expertise: "Experience: 8 Years",
  },
  {
    key: "Gallal",
    image: maram,
    name: "Dr. Gallal",
    expertise: "Experience: 13 Years",
  },
  {
    key: "saleh",
    image: SalehImg,
    name: "Dr. Saleh",
    expertise: "Experience: 7 Years",
  },
  {
    key: "Khairy",
    image: khairyImg,
    name: "Dr. Khairy",
    expertise: "Experience: 20 Years",
  },
  {
    key: "salma",
    image: maram,
    name: "Dr. Salma",
    expertise: "Experience: 10 Years",
  },
];

const DoctorsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
        Doctors
      </Text>
      <View style={styles.cardContainer}>
        <FlatList
          data={doctorsData}
          horizontal={true}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.cardContent}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.doctorText}>{item.name}</Text>
              <Text style={styles.rateText}>{item.expertise}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate("shods")}
          style={styles.buttons}
        >
          Shods (شدس)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate("Smouha")}
          style={styles.buttons}
        >
          Smouha (سموحه)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate("Camp")}
          style={styles.buttons}
        >
          Camp Shezar (كامب شيزار)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate("Victoria")}
          style={styles.buttons}
        >
          Victoria(فيكتوريا)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "95%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    gap: 6,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 20,
  },
  doctorText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rateText: {
    marginLeft: 8,
    fontSize: 16,
  },
  buttons: {
    backgroundColor: "#0766AD",
    marginTop: 15,
    marginBottom: 10,
    height: 40,
    width: 200,
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    elevation: 7,
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1.8,
    shadowRadius: 2,
  },
});

export default DoctorsScreen;
