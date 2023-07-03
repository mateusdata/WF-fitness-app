import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Context } from "../../context/AuthProvider";
import axios from "axios";
import {
  useFonts,
  Inter_100Thin,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import logo from "../../assets/images/logo2.jpeg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar } from "react-native-paper";

const Home = () => {
  const { logout, nome } = useContext(Context);
  const [refreshing, setRefreshing] = useState(true);
  const [m, setM] = useState([]);

  useEffect(() => {
    axios
      .get("https://b9c5-2804-7d74-de-3500-b610-59f2-42d6-f8d8.ngrok-free.app/")
      .then((response) => {
        //console.log(response.data);
        // alert(JSON.stringify(response.data))
        setM(response?.data);
        setTimeout(() => {
          setRefreshing(false);
        }, 5000);
      })
      .catch((erro) => console.log("erro"));
  }, [refreshing]);

  const [fontLoaded] = useFonts({ Inter_100Thin, Inter_400Regular });
  if (!fontLoaded) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>Carregando</Text>
      </View>
    );
  }
  const listItens = [
    {name:"Treinos"},
    {name:"Dieta"},
    {name:"Minha Conta"},
    {name:"Avalição"},
    {name:"Fatura"},
    {name:"Mensalidade"},
    {name:"WhatsApp"},
    {name:"Meu progresso"},
    {name:"Treinos"},
    {name:"Treinos"},

]
  return (
    <RefreshControl
      refreshing={false}
      onRefresh={() => setRefreshing(!refreshing)}
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        borderWidth: 0,
        backgroundColor: "e6e6ed",
      }}
    >
      <ScrollView style={{ flex: 1}}>

        <View style={{alignItems:"center", paddingTop:10, backgroundColor:"#BBB6DF", paddingBottom:30, gap:8} }>
          <Avatar.Text size={70} label={nome&& nome[0]} style={{backgroundColor:"#D98324"}}  />
          <Text style={{fontSize:25}}>{nome}</Text>
        </View>

        <View style={{ flexWrap:"wrap", flexDirection:"row", gap:5, justifyContent:"center", padding:3, marginTop:10}}>

          {listItens.map((item, id)=>(
            <TouchableOpacity key={id} style={{ borderColor:"gray", width:"45%", borderRadius:15, height:80, alignItems:"center", justifyContent:"center", backgroundColor:"#1f3266"}}>
            <Text style={{color:"#c2c3c4"}}>{item?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>


        <View style={{alignItems:"center", justifyContent:"center"}}>
        
          <TouchableOpacity onPress={logout} style={{flex:1, width:"90%", alignContent:"center", justifyContent:"center",  borderRadius:8, height:50, backgroundColor:"#bf4d44"}}>
            <Text style={{textAlign:"center", fontSize:17}}>Sair</Text>
          </TouchableOpacity>
        </View>
        
       
      </ScrollView>
    </RefreshControl>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
    backgroundColor: "#00000090",
  },
  list: {
    borderWidth: 1,
  },
  item: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    width: 100,
    height: 100,
  },
  showAll: {
    justifyContent: "center",
    alignItems: "center",
  },
});
