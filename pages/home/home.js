import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View,  ImageBackground } from 'react-native'
import { Context } from '../../context/AuthProvider'

import { useFonts, Inter_100Thin, Inter_400Regular } from "@expo-google-fonts/inter"
import logo from "../../assets/images/logo2.jpeg"
const Home = () => {
    const { logout } = useContext(Context);
    
    const [fontLoaded] = useFonts({ Inter_100Thin, Inter_400Regular });
    if (!fontLoaded) { return <View style={{alignItems:"center", justifyContent:"center"}}><Text style={{fontSize:30}}>Carregando</Text></View>; }
    return (
        <View style={{flex:1,height:"100%", width:"100%", borderWidth:5, backgroundColor:"#11111F"}}>
            <ImageBackground source={logo} resizeMode='contain' style={{flex: 1,}} blurRadius={0} >
            <View style={{flex:1, width:50}}>
                <Button title='sair' onPress={logout}/>
            </View>
            </ImageBackground>
        </View>
    )
}

export default Home

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