import React from 'react';
import {Navigate} from "react-router-dom";

const RequierAuth = ({children}) => {
    const user =null
    if (!user){
        return <Navigate to={'/login'} state ={Location}/>
    }

    return children
};

export {RequierAuth};