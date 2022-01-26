import React, { createContext } from "react";



const AuthContext = createContext({
    user: [],
    setUser: value => { },
    isLogin: false,
    setIsLogin: value => { }
})



export default AuthContext;