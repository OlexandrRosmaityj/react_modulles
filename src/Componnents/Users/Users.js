import React, {useEffect, useState} from 'react';
import User from "../User/User";
const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        },[]);



    return (
        <div>
          <ol>
              {
                  users.map(value =><li key={value.id}><User item ={value}/></li>)
              }
          </ol>
        </div>
    );
};

export default Users;