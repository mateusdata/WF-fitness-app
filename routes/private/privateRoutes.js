import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/home/home";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../assets/images/logo.jpeg";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import Formulario from "../../components/forms/forms";
import Personal from "../../pages/personal/personal";


const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const PrivateRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Paginal inicial"
        options={{
          headerShown: false,
        }}
      >
        {() => (
          <Tab.Navigator
            screenOptions={{
              headerTitleStyle: {
                color: "white",
                fontSize: 22,
              },
              tabBarStyle: {
                backgroundColor: "#00635B",
              },
            }}
          >
            <Tab.Screen
              name="Academia WF Fitness"
              component={Home}
              options={{
                headerStyle: {
                  backgroundColor: "#00635B",
                },
                headerRight: () => (
                  <>
                    <Image
                      source={logo}
                      style={styles.titleHome}
                      resizeMode="cover"
                    />
                  </>
                ),
                headerLeftContainerStyle: {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  // borderWidth:2
                },
                headerRightContainerStyle: {
                  right: 5,
                  // borderWidth:2
                },
                tabBarIcon: ({color}) => (
                  <Entypo name="home" size={34} color={color} />
                ),
                tabBarLabelStyle: {
                  color: "white",
                  fontSize: 15,
                },
                tabBarLabel: "Home",
              }}
            />
            <Tab.Screen
              name="Academia WF Fitnesss"
              component={Formulario}
              options={{
                headerStyle: {
                  backgroundColor: "#00635B",
                },
                headerRight: () => (
                  <>
                    <Image
                      source={logo}
                      style={styles.titleHome}
                      resizeMode="cover"
                    />
                  </>
                ),
                headerLeftContainerStyle: {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  // borderWidth:2
                },
                headerRightContainerStyle: {
                  right: 5,
                  // borderWidth:2
                },
                tabBarIcon: ({color}) => (
                  <Ionicons name="menu-sharp" size={34} color={color} />
                ),
                tabBarLabelStyle: {
                  color: "white",
                  fontSize: 15,
                },
                tabBarLabel: "Alunos",
              }}
            />


          <Tab.Screen name="personal" component={Personal}/>
          </Tab.Navigator>
        )}
      </AppStack.Screen>
    </AppStack.Navigator>
  );
};

export default PrivateRoutes;
const styles = StyleSheet.create({
  titleHome: { height: 50, width: 90 },
});
