import React, {useContext} from 'react';
import {AuthContext} from "./Auth";
import {Navigate, Outlet} from "react-router-dom";

function PrivateRoute() {
    const {currentUser} = useContext(AuthContext)

    if (!currentUser) {
        return <Navigate to={"/sign-in"}/>
    }

    return <Outlet/>
}

export default PrivateRoute;
