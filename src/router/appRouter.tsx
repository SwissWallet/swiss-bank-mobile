import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function HomeTab() {
    return (
        <Bottom.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Bottom.Screen name="Home" component={Home} />
        </Bottom.Navigator>
    );
}

function AppRouter(): JSX.Element {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Stack.Screen name="HomeTab" component={HomeTab} />
        </Stack.Navigator>
    );
}

export default AppRouter;