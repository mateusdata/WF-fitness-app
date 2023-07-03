import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Context } from "../../context/AuthProvider";
import logo from "../../assets/images/logo2.jpeg";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import axios from "axios";
const SigIn = () => {
  const { login, tipo } = useContext(Context);
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(phone && password){
      axios.post("https://b9c5-2804-7d74-de-3500-b610-59f2-42d6-f8d8.ngrok-free.app/login",{
        phone,
        password
      }).then((response)=>{
        if(response.data.length ===0){
          alert("credenciais incorretas")
          return;
        }
        const{telefone, nome, tipo}= response.data[0]
        if(telefone && nome){
          console.log(tipo);
          login(telefone, nome, tipo)
        }
      }).catch((erro)=>console.log("erro"));
    }
  };
  return (
    <>
      <ExpoStatusBar style="light" backgroundColor="#00635B" />

      <StatusBar
        barStyle={Platform.select({
          ios: "light-content",
          android: "default",
        })}
      />
      <ImageBackground
        source={logo}
        resizeMode="center"
        style={styles.main}
      ></ImageBackground>
      <View style={styles.main}>
        <View style={styles.form}>
          <View
            style={[
              styles.viewInput,
              { borderColor: !isFocus ? "#0B7EBE" : "gray" },
            ]}
            onTouchStart={() => {
              setIsFocus(false);
            }}
          >
            <FontAwesome
              style={styles.icon}
              name="user"
              size={24}
              color="black"
            />
            <TextInput
             onChangeText={(e)=>setPhone(e)}
              autoFocus={true}
              placeholder="Telefone"
              style={styles.input}
            />
          </View>
          <View
            style={[
              styles.viewInput,
              { borderColor: !isFocus ? "gray" : "#0B7EBE" },
            ]}
            onTouchStart={() => {
              setIsFocus(true);
            }}
          >
            <Ionicons
              style={[styles.icon, { left: 8 }]}
              name="md-lock-open"
              size={24}
              color="black"
            />
            <TextInput
              onChangeText={(e)=>setPassword(e)}
              placeholder="Senha"
              style={styles.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.textAcess}
            onPress={() => navigation.navigate("Primeiro Acesso")}
          >
            <Text style={styles.textAcess}>Primeiro Acesso</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textAcess}
            onPress={() => navigation.navigate("Recuperar Senha")}
          >
            <Text style={styles.textAcess}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <View style={styles.viewPresable}>
            <TouchableOpacity onPress={() => handleLogin()} style={styles.pressable}>
              <Text style={styles.textPresable}>Fazer login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
export default SigIn;
