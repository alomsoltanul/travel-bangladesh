// import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext =createContext(null);



const Providers = ({children}) => {

    const [user,setUser] =useState(null);
    // const [loading, setLoading] =useState(false);

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }

    const logOut = () =>{
        // setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, crrUser => {
            console.log("user Logged Out", crrUser);
            // setLoading(true);
            setUser(crrUser);
            
        });
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        user,
        // loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;