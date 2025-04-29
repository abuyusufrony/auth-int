import React, { useContext } from 'react';
import { AuthContex } from '../Components/AuthProvider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (user) {
        return children;

    }

    return (
        <Navigate to='/login'> </Navigate>
    );
};

export default PrivateRoutes;