import React, { useContext, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View,  ImageBackground, RefreshControl, ScrollView } from 'react-native'
import { Context } from '../../context/AuthProvider'
import axios from "axios";
import { useFonts, Inter_100Thin, Inter_400Regular } from "@expo-google-fonts/inter"
import logo from "../../assets/images/logo2.jpeg"
const Personal = () => {
    const { logout, nome, tipo } = useContext(Context);
    const [refreshing, setRefreshing] = useState(true);
    const [m,setM] = useState([]);
    useEffect(()=>{
       // alert("Tipooo" + tipo)
        axios.get("https://b9c5-2804-7d74-de-3500-b610-59f2-42d6-f8d8.ngrok-free.app/").then((response)=>{
            //console.log(response.data);
            //alert(JSON.stringify(response.data))
            setM(response?.data)
            setTimeout(() => {
                setRefreshing(false)
            }, 5000);
        }).catch((erro)=>console.log(""))
    },[refreshing])
    const [fontLoaded] = useFonts({ Inter_100Thin, Inter_400Regular });
    if (!fontLoaded) { return <View style={{alignItems:"center", justifyContent:"center"}}><Text style={{fontSize:30}}>Carregando</Text></View>; }
     return (
        <RefreshControl refreshing={false}   onRefresh={()=>setRefreshing(!refreshing)} style={{flex:1,height:"100%", width:"100%", borderWidth:0, backgroundColor:"#11111F"}}>
          <ImageBackground source={logo} resizeMode='contain' style={{flex: 1, padding:15}} blurRadius={10} >
           <ScrollView>
           <View style={{flex:1, width:50,}}>
                <Button title='sair' onPress={logout}/>
            </View>
            <Text style={{color:"white", fontSize:20}}> Personal  - {nome}</Text>
                {m?.map((item, index)=>(
                <Text key={index} style={{color:"white"}}>{item?.nome } - {item?.treino} </Text> 
            ))}
          
           </ScrollView>
           </ImageBackground>
        </RefreshControl>
    )
}

export default Personal

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        backgroundColor: "#00000090"
    },
    list: {
        borderWidth: 1,
    },
    item: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        width: 100,
        height: 100,
    },
    showAll: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});