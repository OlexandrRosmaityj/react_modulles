import {useState} from "react";


import Users from "./components/Users/Users";
import UsersDetalis from "./components/UsersDetalis/UsersDetalis";
import Posts from "./components/Posts/Posts";
import style from './App.module.css'


function App() {
    const [user, setUser] = useState(null);
    const getUser = (user) => {
        setUser(user)
    }


    return (

        <div>
            <div className={style.wrap}>

                <Users getUser={getUser}/>

                <UsersDetalis user={user}/>

            </div>

            <Posts/>

        </div>
    );
}

export default App;
