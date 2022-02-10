import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import css from "./PostDetalis.module.css"

const UserDetalisPage = () => {
    const location = useLocation();
let {state:user} =location

    return (
        <div className={css.detalis}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <button>Post</button>

        </div>
    );
};

export {UserDetalisPage};