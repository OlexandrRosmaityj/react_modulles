import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import css from "./PostDetalis.module.css"

const UserDetalisPage = () => {
const navigate = useNavigate();
console.log(navigate)
    const location = useLocation();

    let {state: user} = location;


    return (
        <div className={css.detalis}>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <button  onClick={()=>navigate(user.id.toString())}>Post</button>

        </div>
    );
};

export {UserDetalisPage};