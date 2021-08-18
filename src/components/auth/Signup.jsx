import React, { useState, useContext } from 'react';
// import { Context } from '../../context/authContext';
import axios from 'axios';
import "./styles.css";
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

const SignUp = ({ signUp }) => {
//   const { state } = useContext(Context);
  const [fname, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [show, setView] = useState(true);

  const [confPassword, setconfPassword] = useState('');
  const handleChange = (e, name) => {
    switch (name) {
      case 'name':
        setname(e.target.value);

        break;
      case 'email':
        setemail(e.target.value);

        break;
      case 'password':
        setpassword(e.target.value);
        break
      default:
        break
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
try{
const res= await axios.post('https://auth-server-401.herokuapp.com/signup', {
    "email": email,
    "username": fname,
    "password": password,
    })

console.log(res.data)
}


catch(err)
{
console.log(err)
}
}
  
  return (
    <div className="form">
        <h2 className="center">Create an Account</h2>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              onChange={(e) => handleChange(e, 'name')}
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => handleChange(e, 'email')}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e, 'password')}
            />
          </div>

          <input type="submit" value="Sign Up"/>
        </form>
        {/* <p className="float-left">
          Already have an account? <NavLink to="signin">Sign In</NavLink>
        </p> */}



    </div>
  
  )
}

export default SignUp