import React from 'react';
import { Button, Image, TouchableHighlight, ImageBackground, StyleSheet, Text, View } from 'react-native';


import Header from "../../Header/Header"

export default function SignUp({navigation}){

    const goBack = () => navigation.goBack();

    return(
        <View>
            <Header/>
            <View style={styles.container}>
                <View style={styles.viewButton}>
                    <TouchableHighlight style={styles.buttonSignUp} onPress={()=> navigation.navigate("RegistrationScreen")}>
                        <Text style={styles.buttonText}>Nouveau Membres</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonSignUp} onPress={()=> navigation.navigate("RegistrationScreen")}>
                        <Text style={styles.buttonText}>Nouveau Coach</Text>
                    </TouchableHighlight>
                </View>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
   container:{
       flex: 1,
       justifyContent: 'center',
       flexDirection: "column",
   },
    viewButton:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    buttonSignUp:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e8e4e3",
        height: 80,
        width: 250,
        borderColor:"#4a367d",
        borderWidth: 2,
        marginBottom:20,
    },
    buttonText:{
        color:"#4a367d",
        fontWeight: "700",
        fontSize: 22,
    },
});
