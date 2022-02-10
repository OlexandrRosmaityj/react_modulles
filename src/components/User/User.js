import React from 'react';
import css from "./Users.module.css"
import {Link} from "react-router-dom";
const User = ({user}) => {
    const{id,name,username}=user
    return (
        <div className={css.link}>

            <Link to={id.toString()} state={{...user}}>
                <div className={css.users}>
                    <h3>{id}</h3>
                    <h3>{name}</h3>
                    <h3>{username}</h3>
                </div>
            </Link>

        </div>
    );
};

export {User};