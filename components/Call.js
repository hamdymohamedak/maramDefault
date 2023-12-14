import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Linking,
} from "react-native";
import maramImg from "./imgs/maram.jpg";
import bgImg from "./imgs/blob-scene-haikei.png";

const Call = () => {
  let [scrollViewHorizontal, setScrollViewHorizontal] = useState(true);

  let handleChangeViewScroller = () => {
    setScrollViewHorizontal(!scrollViewHorizontal);
  };

  return (
    <ImageBackground style={styles.parent} source={bgImg}>
      <ScrollView
        horizontal={scrollViewHorizontal}
        contentContainerStyle={styles.scrollViewStyling}
      >
        <View style={styles.card}>
          <View style={styles.profile}>
            <Image source={maramImg} style={styles.profileImg} />
          </View>
          <Text style={styles.titleName}>EN:Victoria</Text>
          <Text style={styles.titleNameAR}>AR: فيكتوريا</Text>
          <Text style={styles.address}>
            76 تقاطع ممتاز باشا مع ملك حفني محطه فيكتوريا برح الشباب
          </Text>
          <View style={styles.btn}>
            <Button
              title="( اتصال ) Call"
              onPress={() => {
                Linking.canOpenURL("tel:01281994419").then((canOpen) => {
                  fetch(
                    "https:api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text='Call At ELmaram (Victoria)'"
                  );
                  if (canOpen) {
                    Linking.openURL("tel:01281994419");
                  } else {
                    console.error("Cannot open phone call");
                  }
                });
              }}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.profile}>
            <Image source={maramImg} style={styles.profileImg} />
          </View>
          <Text style={styles.titleName}>EN:Smouha</Text>
          <Text style={styles.titleNameAR}>AR: سموحه</Text>
          <Text style={styles.address}>6 شارع عثمان احمد عثمان بيت العز</Text>
          <View style={styles.btn}>
            <Button
              title="( اتصال ) Call"
              onPress={() => {
                Linking.canOpenURL("tel:01202330008").then((canOpen) => {
                  fetch(
                    "https:api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text='Call At ELmaram (Smouha)'"
                  );
                  if (canOpen) {
                    Linking.openURL("tel:034201823");
                  } else {
                    console.error("Cannot open phone call");
                  }
                });
              }}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.profile}>
            <Image source={maramImg} style={styles.profileImg} />
          </View>
          <Text style={styles.titleName}>CampShezar</Text>
          <Text style={styles.titleNameAR}> كامب شيزار</Text>
          <Text style={styles.address}>17 شارع عمر لطفي محطه ترام الجامعه</Text>
          <View style={styles.btn}>
            <Button
              title="( اتصال ) Call"
              onPress={() => {
                Linking.canOpenURL("tel:01282991911").then((canOpen) => {
                  fetch(
                    "https:api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text='Call At ELmaram (Camp Shezar)'"
                  );
                  if (canOpen) {
                    Linking.openURL("tel:01282991911");
                  } else {
                    console.error("Cannot open phone call");
                  }
                });
              }}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.profile}>
            <Image source={maramImg} style={styles.profileImg} />
          </View>
          <Text style={styles.titleName}>EN:Shods</Text>
          <Text style={styles.titleNameAR}>AR: شدس</Text>
          <Text style={styles.address}>212 شارع الفتح امام محطه ترام شدس</Text>
          <View style={styles.btn}>
            <Button
              title="( اتصال ) Call"
              onPress={() => {
                Linking.canOpenURL("tel:01555400117").then((canOpen) => {
                  fetch(
                    "https:api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text='Call At ELmaram (Shods)'"
                  );
                  if (canOpen) {
                    Linking.openURL("tel:01555400117");
                  } else {
                    console.error("Cannot open phone call");
                  }
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.scrollViewButton}>
        <Button onPress={handleChangeViewScroller} title="Toggle Cards View" />
      </View>
    </ImageBackground>
  );
};

let styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(68, 119, 206, 0.7)", // Add alpha for transparency
    height: 250,
    width: 250,
    borderRadius: 50,
    overflow: "hidden",
    position: "relative",
    margin: 10,
  },
  scrollViewStyling: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    backgroundColor: "white",
    width: 75,
    height: 75,
    margin: 30,
    borderRadius: 20,
    position: "absolute",
    right: 0,
    overflow: "hidden",
  },
  titleName: {
    position: "absolute",
    margin: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  titleNameAR: {
    position: "absolute",
    margin: 40,
    top: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  address: {
    position: "absolute",
    margin: 80,
    top: 30,
    right: -90,
    width: 250,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
  profileImg: {
    position: "absolute",
    height: "102%",
    width: "100%",
    resizeMode: "cover",
  },
  btn: {
    position: "absolute",
    top: "86.5%",
    margin: 0,
    width: "100%",
  },
  scrollViewButton: {
    position: "absolute",
    bottom: 20,
    width: 100,
    height: 50,
    alignSelf: "flex-end",
    overflow: "hidden",
    borderRadius: 200,
  },
});

export default Call;
