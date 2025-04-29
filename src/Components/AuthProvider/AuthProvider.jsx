import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.int';

export const AuthContex = createContext(null)
// 

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState([])
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, curentusers => {
            console.log("user are login", curentusers)
            setuser(curentusers)


        })
        return () => {
            unsuscribe()
        }
    }, [])

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singOutUser = () => {
        return signOut(auth)
    }
    // onAuthStateChanged(auth, (cureentuser) => {
    //     if (cureentuser) {
    //         console.log("user are in logged in", cureentuser)
    //         setuser(cureentuser)
    //     }
    //     else {
    //         console.log("user are not login")
    //         setuser([])
    //     }
    // })

    const userInfo = {
        user,
        createuser,
        loginUser, singOutUser
    }


    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;