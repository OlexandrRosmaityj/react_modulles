import React from 'react';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";


import css from "./Layout.module.css"
import {useAuth} from "../../hooks/useAuth";

const Layout = () => {
const {logOut} =useAuth();
const navigate  = useNavigate();
const logout = () => {
    logOut(()=> navigate('/',{replace:true}))

}
    return (

        <div>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/notfound">NotFound</NavLink>
                <button onClick={logout}>LogOut</button>

            </div>

            <h3 className={css.outlet}><Outlet/></h3>

            <div className={css.footer}>
                @ReactRouterDom
            </div>

        </div>

    );
};

export {Layout};