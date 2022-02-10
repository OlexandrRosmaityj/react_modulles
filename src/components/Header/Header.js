import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div className={css.outlet}><Outlet/></div>
<div className={css.footer}>@React</div>
        </div>
    );
};

export default Header;