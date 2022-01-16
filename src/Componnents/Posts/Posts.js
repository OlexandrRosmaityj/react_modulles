import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });

    },[]);



    return (
        <div>
            <ol>
                {
                    posts.map(value =><li key={value.id}><Post item ={value}/></li>)
                }
            </ol>
        </div>
    );
};

export default Posts;