import React from 'react';
import {useParams} from "react-router-dom";

const UserPostPage = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            UserPostPage
        </div>
    );
};

export {UserPostPage};