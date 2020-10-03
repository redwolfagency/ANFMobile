import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native'
import { Button, Image, TouchableHighlight, ImageBackground, StyleSheet, Text, View } from 'react-native';

import SingUpScreen  from "./src/screens";

const signupPressed = ()=>{
  Alert.alert("Completed Singup!")
}

const loginPressed = ()=> {
  Alert.alert("Completed Login!")
}


 
export default function App()  {

 
  
  
  return (
    <ImageBackground source={require('./assets/imgs/LoginPircture.jpg')} style={styles.loginImage}>
            <View style={styles.overlay}>
            <Image source={require('./assets/imgs/LogoANF.png')} style={styles.logoAnf}/> 
            <View style={styles.contentText}>
              <View style={styles.viewButton}>
                <TouchableHighlight  onPress={signupPressed}>
                  <View style={styles.singUp}>
                    <Text style={styles.singUpText}>S'inscrire</Text>
                  </View> 
                </TouchableHighlight>
                <TouchableHighlight  onPress={loginPressed} >
                  <View style={styles.singIn}>
                      <Text style={styles.singUpText}>Connexion</Text>
                  </View> 
                </TouchableHighlight> 
                </View>
                <Text style={styles.text}>Mot de passe oublié ?</Text>
             </View>
            </View>
            <StatusBar style="auto" />
        </ImageBackground>
   
    
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
  display: "flex",
    alignItems: "center",
    padding:10,
    width: 250,
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
