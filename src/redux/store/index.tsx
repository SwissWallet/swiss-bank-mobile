import { configureStore } from "@reduxjs/toolkit";
import userLoged  from "../reducers/userLoged";
import userObject from "../reducers/user";
import loadingUser from "../reducers/loading";

export default configureStore({
    reducer: {
        logado: userLoged,
        user: userObject,
        loading: loadingUser
    }
});