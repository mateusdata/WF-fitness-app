import { StyleSheet } from "react-native";

export const styles  = StyleSheet.create({
    main:{
       flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundColor:"#11111F"
     
    },
    viewInput:{
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#D9D9D9",
      borderRadius:8,
      borderColor:"gray",
      borderWidth:1
    },
    icon:{
      left:10,
      width:25
    },
    input:{
      color:"black",
      borderRadius:8,
      width:300,
      maxWidth:"72%",
      padding:15,
      fontSize:18,
      fontWeight:"900"
    },
    form:{
     bottom:60,
      gap:5
    },
    viewPresable:{
      top:0,
      alignItems:"flex-end",
    
    },
    pressable:{
      backgroundColor:"#0B7EBE",
      padding:15,
      borderRadius:10
    },
    textPresable:{
      color:"#000000",
      fontSize:18
    },
    textAcess:{
      color:"#0B7EBE"
    }
    
})