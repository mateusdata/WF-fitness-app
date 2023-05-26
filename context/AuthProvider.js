import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar, Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [nome, seName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("usuario").then((response)=>{
        setUser(response);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    })
  }, []);

  const login = async () => {
    const data = {
      token: "ads2dsd3asd5",
      user: { name: "alunoProSaber", email: "prosaber@gmail.com" },
    };
    const { user } = data;

    seName(data.user.name);
    setEmail(data.user.email);
    setUser(user);
    setLoading(true);
    await AsyncStorage.setItem("usuario", JSON.stringify(data.user)).then((response)=>{
      setInterval(() => {
        setLoading(false);
      }, 500);
    });
  };

  const logout = async () => {
    setLoading(true)
    await AsyncStorage.removeItem("usuario");
   setTimeout(() => {
    setUser(false);
    setLoading(false)
   }, 500);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <ExpoStatusBar style="light" backgroundColor="#00635B" />

      <StatusBar
        barStyle={Platform.select({
          ios: 'light-content',
          android: 'default',
        })}
      />

        <ActivityIndicator animating={true} color={"#0B7EBE"} size={50} />
      </View>
    );
  }
  return (
    <Context.Provider
      value={{ nome, email, user, logado: !!user,login ,logout, setUser }}
    >
      {children}
    </Context.Provider>
  );
};


export default AuthProvider;









