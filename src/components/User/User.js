import React from 'react';
import style from './user.module.css'

const User = ({user} )=> {
    const {id, name, username, email} = user;

    return (
        <div className={style.wrap}>
            <div>
                {id}) {name} --{username}--{email}
            </div>

        </div>
    );
};

export default User;