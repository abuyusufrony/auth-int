import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/Firebase.int';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {

        createuser
    }


    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;