import {createContext, useState} from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null);

    const login  = (newUser, cb)
    setUser(newUser)
    cb()


const logOut = (cb)=>{
    setUser(null)
    cb()
}

const  value  = {user, login ,logOut}

return(
    <Authcontextontext.Provider value={value}>
        {children}
    </Authcontextontext.Provider>
)
}
export default AuthProvider
