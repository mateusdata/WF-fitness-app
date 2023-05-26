import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Context } from '../../context/AuthProvider'
import logo from "../../assets/images/logo.jpeg"
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native'
const FirstAccess = () => {
    const {login} = useContext(Context);
    const navigation = useNavigation();
    const [isFocus, setIsFocus] = useState(true);
  return (
    <View style={styles.main}  onTouchStart={()=>{setIsFocus(true)}}>
      <Image source={logo} resizeMode='center'  />
      <View style={styles.form}>
      <View  style={[styles.viewInput,{borderColor:!isFocus?"#0B7EBE":"gray"}]}  onTouchStart={(e)=>{
        e.stopPropagation(); setIsFocus(false)}
      }>
      <FontAwesome style={styles.icon} name="user" size={24} color="black" />
      <TextInput placeholder='Email' style={styles.input} />
      </View>
        <TouchableOpacity  style={styles.textAcess}  onPress={()=> navigation.navigate("Recuperar Senha")}>
          <Text style={styles.textAcess}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <View style={styles.viewPresable}>
        <TouchableOpacity onPress={()=>alert("test")} style={[styles.pressable,{paddingHorizontal:35}]}>
          <Text style={styles.textPresable}>Enviar</Text>
        </TouchableOpacity>
        </View>
       </View>
    </View>
  )
}
export default FirstAccess
