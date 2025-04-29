import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.int';

export const AuthContex = createContext(null)
// 

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, curentusers => {
            console.log("user are login", curentusers)
            setuser(curentusers)
            setloading(false)


        })
        return () => {
            unsuscribe()
        }
    }, [])

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const loginUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singOutUser = () => {
        setloading(true)
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
        loading,
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