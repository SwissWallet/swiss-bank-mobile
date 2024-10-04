import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import { HomeIcon } from "lucide-react-native";
import { View } from "@gluestack-ui/themed";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function HomeTab() {
    return (
        <Bottom.Navigator
            screenOptions={
                {
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#1B1B1B',
                        position: 'absolute',
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        bottom: 20,
                        borderRadius: 10,
                        left: 30,
                        right: 30,
                        height: 65,
                    },
                    tabBarShowLabel: false
                }
            }
        >
            <Bottom.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({color, size}) => {
                        return (
                            <View bgColor="#2C2C2C" width={45} height={45} justifyContent="center" alignItems="center" borderRadius={5}>
                                <HomeIcon color={'red'} size={size}/> 
                            </View>
                        );
                    },
                    
                }}
            
            />
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