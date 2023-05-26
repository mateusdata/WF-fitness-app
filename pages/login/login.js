import React, { useContext, useState } from "react";
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
const SigIn = () => {
  const { login } = useContext(Context);
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(true);
  const handleLogin = () => {
    //logica para fazer o login no progredir
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
              autoFocus={true}
              placeholder="Email"
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
            <TouchableOpacity onPress={() => login()} style={styles.pressable}>
              <Text style={styles.textPresable}>Fazer login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
export default SigIn;
