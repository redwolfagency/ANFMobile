import React from 'react';
import { Button, Image, TouchableHighlight, ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen({navigation}){
 return (
         <ImageBackground source={require('./imgs/Fond.jpg')} style={styles.loginImage}>
             <View style={styles.overlay}>
            <Image source={require('./imgs/LogoANF.png')} style={styles.logoAnf}/> 
            <View style={styles.contentText}>

                <View style={styles.viewButton}>
                    <Button style={styles.singUp}
                            onPress={()=> navigation.navigate("SignUp")}
                            title={`Go to SignUp`} />
                </View>

                <Text style={styles.text}>Mot de passe oublié ?</Text>
             </View>
            </View>
         </ImageBackground>
    );
}



const styles = StyleSheet.create({
    loginImage:{
        flex:1,
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
