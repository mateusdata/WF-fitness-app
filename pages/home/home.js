import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Context } from "../../context/AuthProvider";
import axios from "axios";
import {
  useFonts,
  Inter_100Thin,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../client/client";
import Personal from "../personal/personal";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native-paper";
const Home = () => {
  const { logout, tipo, setTipo, setNome } = useContext(Context);
  const [refreshing, setRefreshing] = useState(true);
  const [m, setM] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //alert(tipo)
    AsyncStorage.getItem("usuario").then((response) => {
      const T = JSON.parse(response);
      console.log(T);
      console.log(JSON.stringify(T));
      setLoading(false)
      setTipo((T?.userTipo))
      setNome(T?.nomeUser)
    }).catch((erro)=>console.log("erro"));
   
  }, [refreshing]);
  const [fontLoaded] = useFonts({ Inter_100Thin, Inter_400Regular });
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#00635B",
        }}
      >
        <ExpoStatusBar style="light" backgroundColor="#00635B" />

        <StatusBar
          barStyle={Platform.select({
            ios: "light-content",
            android: "default",
          })}
        />

        <ActivityIndicator animating={true} color={"yellow"} size={50} />
      </View>
    );
  }
  if (!fontLoaded) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>Carregando</Text>
      </View>
    );
  }

  return <>{!tipo == 0 ? <Client /> : <Personal />}</>;
};
export default Home;
