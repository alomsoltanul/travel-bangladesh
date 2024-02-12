// import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext =createContext(null);



const Providers = ({children}) => {

    const [user,setUser] =useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);

    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, crrUser => {
            console.log("user Logged Out", crrUser);
            setUser(crrUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        user,
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