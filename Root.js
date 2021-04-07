
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/home/Homescreen";
import SignUp from "./src/screens/auth/signup/Signup";
import LoginScreen from "./src/screens/auth/loginscreen/LoginScreen";
import RegistrationScreen from "./src/screens/users/registrationscreen/registrationscreen";


const Stack = createStackNavigator();

export default function Root() {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name=" " component={HomeScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
            </Stack.Navigator>
        </Stack.Navigator>
    );
}