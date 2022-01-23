import React from 'react';
import {Outlet} from "react-router-dom";

const PostPage = () => {
    return (
        <div>
            Post
            <Outlet/>
        </div>
    );
};

export {PostPage};