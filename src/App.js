import {useState} from "react";


import Users from "./components/Users/Users";
import UsersDetalis from "./components/UsersDetalis/UsersDetalis";
import Posts from "./components/Posts/Posts";
import style from './App.module.css'
import {postService} from "./service/post.service";


function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState([]);




    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }
const  getUserId =(id)=>{
postService.getByUserId(id).then(value => setPosts([...value]))

}

    return (

        <div>
            <div className={style.wrap}>

                <Users getUser={getUser}/>

                {user&&  <UsersDetalis user={user} getUserId ={getUserId}/>}

            </div>

            {!!posts.length&&<Posts posts={posts}/>}

        </div>
    );
}

export default App;
