import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Home from "./components/Home";
import OrdersScreen from "./components/OrdersScreen";
import shods from "./components/shods";
import Smouha from "./components/Smouha";
import Camp from "./components/Camp";
import Victoria from "./components/Victoria";
import Contracts from "./components/Contracts";
import Asks from "./components/Asks";
import Call from "./components/Call";
import { StatusBar } from "expo-status-bar";
import FeedBack from "./components/FeedBack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor="#b3e6ff" barStyle="dark-content" />
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "black",
            labelStyle: {
              fontSize: 15,
              fontWeight: "bold",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="medicinebox" size={24} color="black" />
              ),
            }}
          />

          <Tab.Screen
            name="Contracts"
            component={Contracts}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="contacts" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Asks"
            component={Asks}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Fontisto name="prescription" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Call"
            component={Call}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Feather name="phone-call" size={24} color="black" />
              ),
            }}
          />

          <Tab.Screen
            name="FeedBack"
            component={FeedBack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="recommend" size={24} color="black" />
              ),
            }}
          />
          {/* orders */}

          <Tab.Screen
            name="shods"
            component={shods}
            options={{ tabBarButton: () => null }}
          />
          <Tab.Screen
            name="Smouha"
            component={Smouha}
            options={{ tabBarButton: () => null }}
          />
          <Tab.Screen
            name="Camp"
            component={Camp}
            options={{ tabBarButton: () => null }}
          />
          <Tab.Screen
            name="Victoria"
            component={Victoria}
            options={{ tabBarButton: () => null }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
