import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../service/users.service/users.service";
import {postService} from "../../service/posts.service/posts.service";
import {UserPost} from "../../components/UserPost/UserPost";

const UserPostPage = () => {

    const params = useParams();
    const [userPost, setUserPost] = useState([]);

    useEffect(() => {
       postService.getById(params.id).then(value => setUserPost([...value]))
    }, [params.id])
    return (
        <div>
            {userPost.map(post => <UserPost key={post.id} item={post}/>)};
        </div>
    );
};

export {UserPostPage};