import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/Signin/SignIn";

function AuthRouter():JSX.Element{
    
    const Stack = createNativeStackNavigator();
    
    return(
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Stack.Screen name="SignIn" component={SignIn}/>
            
            
        </Stack.Navigator>
    );
}

export default AuthRouter;