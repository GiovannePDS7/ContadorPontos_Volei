import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "../pages/TelaInicial";
import TelaTimes from "../pages/TelaTimes";
import { NavigationContainer } from "@react-navigation/native";
import TelaPlacar from "../pages/TelaPlacar";
import TelaHis from "../pages/TelaHis";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={TelaInicial} options={{ headerShown: false }}/>
                <Stack.Screen name="Times" component={TelaTimes} options={{ headerShown: false }}/>
                <Stack.Screen name="Placar" component={TelaPlacar} options={{ headerShown: false }}/>
                <Stack.Screen name="Historico" component={TelaHis} options={{ headerShown: false }}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
