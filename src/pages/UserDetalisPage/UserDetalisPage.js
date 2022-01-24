import React from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";




const UserDetalisPage = () => {
    // const params =  useParams();
    // const  id =params.id
    //
    // const {state} = useLocation();
    return (
        <div>
            user_det
            <Outlet/>
        </div>
    );
};

export {UserDetalisPage};