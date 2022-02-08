import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";


import css from "./Layout.module.css"

const Layout = () => {

    return (

        <div>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/notfound">NotFound</NavLink>

            </div>

            <h3 className={css.outlet}><Outlet/></h3>

            <div className={css.footer}>
                @ReactRouterDom
            </div>

        </div>

    );
};

export {Layout};