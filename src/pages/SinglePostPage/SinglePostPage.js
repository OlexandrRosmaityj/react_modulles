import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {

    const {id} = useParams();

    const [post, setPost] = useState(null);

    const {state} = useLocation();

    // const navigate =useNavigate();




    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])


//     const toHome = () => {
// navigate('/')
//     }
//     const back = () => {
// navigate(-1)
//     }




    return (
        <div>
            {/*<button onClick={toHome}>Home</button>*/}
            {/*<button onClick={back}>Back</button>*/}
            {post && (
                <div>
                    <div>Id:{post.id}</div>
                    <div>UserID:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>BodyId:{post.body}</div>
                </div>
            )}
        </div>
    );
};


export {SinglePostPage};