import React, { Component } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import base64 from 'base-64';
import axios from 'axios';
import { useEffect,useState } from 'react';
const API = 'https://spice-g4.herokuapp.com/signin';
export const AuthContext = React.createContext();
export default function Auth(props)  {

const [loggedIn, setLoginState] = useState(false)
const [userCapibility, setUser] = useState([])
const [show, setView] = useState(true);

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
console.log(token,"heloo from sec ttimes")
}, [])
  const validateToken = (token) => {
    // dont verify in the frontend!!
    // const user = jwt.verify(token,'secret')
    if (token) {
      const user = jwt.decode(token);
      cookie.save('auth', token);

      setLoginState(true);
      setUser(user.capabilities);

    } else {
      setLoginState(false);
    }

    console.log(userCapibility)
  };



   const login = async (username, password)=>  {
    // headers{authorization: "Basic sdfsdfsdf="}
    console.log(password)


    try{
    var payload = {
        "username": username,
        "password": password,
      }
  
    const res= await axios.post('https://auth-server-401.herokuapp.com/signin', {
        //reqbody
      },
        {
          auth:
          payload
        })
    console.log(res)
        validateToken(res.data.token)
}


catch(err)
{
console.log(err.message)
}

  };

  const logout = () => {
    cookie.remove("auth");

    setLoginState(false, null, {});
  };

    return (
      <AuthContext.Provider
        value={{login ,loggedIn,userCapibility,logout,show,setView}}
      >

      
       {props.children}
      </AuthContext.Provider>
    );
  
}