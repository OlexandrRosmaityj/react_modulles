import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../service/posts.service/posts.service";

const UserDetalisPage = () => {
    const location = useLocation();
let {state:user} =location

    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            
        </div>
    );
};

export {UserDetalisPage};