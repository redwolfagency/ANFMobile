import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login}  from "./src/screens";


 
export default function App()  {
  return (
    <View>
      <Login></Login>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginImage:{
    flex:1,
    backgroundColor: 'rgba(255,0,0,.6)',
    width: "100%",
    height: "100%",
    
},
overlay:{
    backgroundColor: 'rgba(7,7,113,0.6)',
    display: "flex",
    alignItems: "center",
    justifyContent: 'flex-end',
    height:"100%",
},
logoAnf:{
    width:270,
    height:220,
    marginBottom:160,
},
contentText:{
    alignItems:"center",
    justifyContent:"space-between",
    height:"40%",
    
},
viewButton:{
    padding:10,
    width: "50%",
    height:"10%",
},
singUp:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#1a9f74",
    height: 40,
    width: 200,
    borderRadius:50,
    marginBottom: 30,
},
singIn:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 200,
    borderRadius:45,
    borderColor: "#ffffff",
    borderWidth: 3,
   
},
singUpText:{
    color:"white",
    fontWeight: "700",
    fontSize: 22,
},
text:{
    color:"white",
    fontSize:16,
    textDecorationLine: "underline",
    marginBottom: 15,
}
});
