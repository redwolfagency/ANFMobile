import React from 'react';
import { Button, Image, TouchableHighlight, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function SignUp({navigation}){

    const goBack = () => navigation.goBack();

    return(
    <View style={styles.background}>
        <Text>On s'inscrisGNAGNANANANANAN</Text>
    </View>
    );
}

const styles = StyleSheet.create({
   background:{
       backgroundColor:"#1a9f74",
   }
});
