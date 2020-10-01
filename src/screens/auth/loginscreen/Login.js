import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';




export default function Login(){
   
    return (
        <ImageBackground source={require('./img/LoginPircture.jpg')} style={styles.loginImage}>
            <View style={styles.overlay}>
            <View style={styles.contentText}>
                <View style={styles.viewButton}>
                    <Button title="S'inscrire"/>
                    <Button  title="Connexion"/>
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
        backgroundColor: 'rgba(255,0,0,.6)',
        width: "100%",
        height: "100%",
        
    },
    overlay:{
        backgroundColor: 'rgba(7,7,113,0.6)',
        display: "flex",
        justifyContent: 'flex-end',
        height:"100%",
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
    text:{
        color:"white",
        fontSize:16,
    }
   
});
