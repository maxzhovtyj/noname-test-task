import React, {createContext, useContext, useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import {app} from "./base"

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const getAppAuth = () => {
    return getAuth(app)
}

export const AuthProvider = ({children}) => {
    const auth = getAppAuth()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    });

    return (
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    );
}
