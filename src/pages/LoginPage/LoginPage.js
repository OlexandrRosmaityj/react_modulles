import React from 'react';
import {useAuth} from "../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {

    const {login} = useAuth();

    const navigate = useNavigate;


    const {state:{pathname}} = useLocation();
    const submit = (e)=>{
        e.preventDefault()
        const user = e.target.username.value;
        login(user,()=>navigate(pathname))
    }


    return (
        <div>
            <h2>login</h2>
            <form onSubmit={submit}></form>
            <label><input type="text" name={'username'}/></label>
            <button>Login</button>

        </div>
    );
};h

export {LoginPage};