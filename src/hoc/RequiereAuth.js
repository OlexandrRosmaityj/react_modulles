import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const RequiereAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();
    // const user =null


    if (!user){
        return <Navigate to={'/login'} state ={location}/>
    }

    return children
};

export default RequiereAuth;