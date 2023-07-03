import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar, Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [nome, seName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [tipo, setTipo] = useState("");


  useEffect(() => {
    AsyncStorage.getItem("usuario").then((response)=>{
        setUser(response);
        let recovere =  JSON.parse(response);
        setLoading(false)
    }).catch((err)=>console.log("err"))
  }, []);

  const login = async (phoneReq, nomeUser, userTipo) => {
    const data = {
      user: { nomeUser,  phoneReq, userTipo},
    };
    const { user } = data;
   
    console.log(data);
    seName(data?.user?.nomeUser);
    setPhone(data?.user?.phoneReq);
    setUser(user);
    setLoading(true);
    await AsyncStorage.setItem("usuario", JSON.stringify(data.user)).then((response)=>{
      setLoading(false);
    }).catch((err)=>console.log("erro"));
  };

  const logout =  () => {
    setLoading(true)
    AsyncStorage.removeItem("usuario");
    setTimeout(() => {
    setUser('');
    setTipo("");
    setLoading(false)
    //alert(tipo)
   }, 10);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"#00635B" }}>
         <ExpoStatusBar style="light" backgroundColor="#00635B" />

      <StatusBar
        barStyle={Platform.select({
          ios: 'light-content',
          android: 'default',
        })}
      />

        <ActivityIndicator animating={true} color={"yellow"} size={50} />
      </View>
    );
  }
  return (
    <Context.Provider
      value={{ nome, phone, user, logado: !!user,login ,logout, setUser, tipo, setTipo}}
    >
      {children}
    </Context.Provider>
  );
};


export default AuthProvider;









