import React from 'react';
import { Button, Image, TouchableHighlight, ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';


export default function Header(){



    return(
        <View style={styles.container}>
           <Text>Headers</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        height:200,
        backgroundColor: "#1a9f74"
    },

});
