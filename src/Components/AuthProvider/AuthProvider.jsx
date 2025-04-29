import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/Firebase.int';

export const AuthContex = createContext(null)
// 

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState([])

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    onAuthStateChanged(auth, (cureentuser) => {
        if (cureentuser) {
            console.log("user are in logged in", cureentuser)
            setuser(cureentuser)
        }
        else {
            console.log("user are not login")
            setuser([])
        }
    })

    const userInfo = {
        user,
        createuser,
        loginUser
    }


    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;