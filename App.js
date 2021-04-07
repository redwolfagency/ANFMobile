import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from "./src/screens/home/Homescreen";
import SignUp from "./src/screens/auth/signup/Signup";
import LoginScreen from "./src/screens/auth/loginscreen/LoginScreen";
import  RegistrationScreen from "./src/screens/users/registrationscreen/registrationscreen"
import ProgramObjectiveScreen from "./src/screens/users/programobjective/programobjectivescreen";



const Stack = createStackNavigator();

export default function App() {
  return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" headerMode="none">
                    <Stack.Screen name=" " component={HomeScreen} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
                    <Stack.Screen name="ProgramObjectiveScreen" component={ProgramObjectiveScreen} />
                </Stack.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
