import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {Post} from "../../components/Post/Post";
import {Outlet, useSearchParams} from "react-router-dom";
import  css from "./Post.module.css"

const PostsPage = () => {


    const [posts, setPosts] = useState([]);

    const [qvery, setQvery] = useSearchParams();

    useEffect(()=>{
        postService.getAll().then(value =>{
            const title = qvery.get('title');
            let filter = [...value]
            if(title){
                filter = value.filter(post=>post.title.includes(title))
            }
            setPosts(filter)
        })
    },[qvery])


    const submit = (e) => {
        e.preventDefault()
        setQvery({title:e.target.search.value})
    }


    return (
        <div>
            <form onSubmit={submit}>
                <input type="search"  name={'search'}/>
                <button>Search</button>

            </form>

            <div className={css.post}>
                <h2>Posts</h2>
                <h4>{posts.map(post => <Post key={post.id} post={post}/>)}</h4>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export {PostsPage};