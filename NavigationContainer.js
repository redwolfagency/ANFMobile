import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import Root from "./Root";

export default function Navigation() {
    return (
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    );
}