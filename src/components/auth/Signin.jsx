import React, { useState, useContext } from 'react';
// import { Context } from '../../context/authContext';
import {AuthContext} from '../context/auth'
import "./styles.css";

const Signin = ({ props }) => {
  const userAuth = useContext(AuthContext);
//   const { state } = useContext(Context);
  const [fname, setname] = useState('');
  const [password, setpassword] = useState('');
  const handleChange = (e, name) => {
    switch (name) {
      case 'name':
        setname(e.target.value);
console.log(fname)
        break;
      case 'password':
        setpassword(e.target.value);
        break
      default:
        break
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    userAuth.login(fname,password)

}
  
  return (
    
    <div className="form">
        <h2 className="center">Sign in </h2>
        <form  onSubmit={handleSignIn}>
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              onChange={(e) => handleChange(e, 'name')}
            />
          </div>

          <div>
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e, 'password')}
            />
          </div>
     
          <input type="submit" value="Sign In"/>
        </form>
   
{userAuth.loggedIn &&
        <button onClick={userAuth.logout}>Log out </button>
}
    </div>
  )
}

export default Signin