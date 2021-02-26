
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/home/Homescreen";
import SignUp from "./src/screens/auth/signup/Signup";

const Stack = createStackNavigator();

export default function Root() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}