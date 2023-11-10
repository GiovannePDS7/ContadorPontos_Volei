import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "../pages/TelaInicial";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={TelaInicial} options={{ headerShown: false }}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
