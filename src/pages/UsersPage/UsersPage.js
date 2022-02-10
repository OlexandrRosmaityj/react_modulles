import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {userService} from "../../service/users.service/users.service";
import {User} from "../../components/User/User";
import css from "./users.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState([]);
console.log(users)

    useEffect(()=>{
        userService.getAll().then(value => setUsers(value))

    },[]);
    return (
        <div className={css.users}>
            <div>{users.map(user => <User key={user.id} user={user}/>)
            }</div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};