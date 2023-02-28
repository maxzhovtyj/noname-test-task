import React, {useEffect, useState} from 'react';
import {getAuth} from "firebase/auth"
import app from "./base"

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const auth = getAuth(app)

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    );
}

