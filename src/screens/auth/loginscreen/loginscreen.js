import React from 'react';
import { Button, Image, TouchableHighlight, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen({navigation}){
    const goBack = () => navigation.goBack();
    return(
        <View>
            <Text>
                C'est la connexion de la mort qui tueeeee
            </Text>
        </View>
    )
}