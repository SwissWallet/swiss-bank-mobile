import React from "react";
import AppRouter from "./appRouter";
import AuthRouter from "./authRouter";
import { useSelector } from "react-redux";
import { Center } from "@gluestack-ui/themed";
import { ActivityIndicator } from "react-native";

function Router():JSX.Element {
    const loged = useSelector((state:any) => state.logado.value);
    const loadingUser = useSelector((state:any) => state.loading.value);
    
    if (loadingUser) {
        return(
            <Center bgColor="#ffffff8a" flex={1}>
                <ActivityIndicator color="#000" size="large"/>
            </Center>
        );
    }
    else {
        return(
            loged ? <AppRouter /> : <AuthRouter/>
        );
    }

}

export default Router;