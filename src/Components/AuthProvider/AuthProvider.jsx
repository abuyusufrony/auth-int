import React, { createContext } from 'react';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {

    const userInfo = {
        name: 'work hard untill get job'
    }


    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;