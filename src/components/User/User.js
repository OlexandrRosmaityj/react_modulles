import React from 'react';
import style from './user.module.css'

const User = ({user, getUser} )=> {
    const {id, name} = user;

    return (
        <div className={style.wrap}>
            <div>
                {id}) {name}
            </div>
            <button onClick={()=>getUser(user)}>Details</button>
        </div>
    );
};

export default User;