import {useContext} from "react";
import {Authcontext} from "../hoc/AuthProvider";

export  const useAuth =() => useContext(Authcontext)