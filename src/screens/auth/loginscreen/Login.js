import React from 'react';
import { Button, TouchableWithoutFeedback, ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function Login(){
   
    return (
        <ImageBackground source={require('./img/LoginPircture.jpg')} style={styles.loginImage}>
            <View style={styles.overlay}>
            <View style={styles.contentText}>
                <View style={styles.viewButton}>
                    <TouchableWithoutFeedback >
                        <View style={styles.singUp}>
                            <Text style={styles.singUpText}>S'inscrire</Text>
                        </View> 
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback >
                        <View style={styles.singIn}>
                            <Text style={styles.singUpText}>Connexion</Text>
                        </View> 
                    </TouchableWithoutFeedback>
                    
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
    singUp:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#1a9f74",
        height: 40,
        width: 180,
        borderRadius:50,
        marginBottom: 20,
    },
    singIn:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 180,
        borderRadius:50,
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
    }
   
});
