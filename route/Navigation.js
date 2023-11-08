import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "../pages/TelaInicial";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicial" component={TelaInicial} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
