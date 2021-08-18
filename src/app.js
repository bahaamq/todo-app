import React from 'react';
import { useContext } from 'react';

import ToDo from './components/todo/todo.js';
import  { useState } from 'react';
import Setting from './components/todo/Setting.js';
import SignUp from './components/auth/Signup'
import Signin from './components/auth/Signin'
import AuthContext from './components/context/auth'
import ItemContext from './components/context/items'
import  ListContext  from './components/context/filterList';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function  App() {



    return (
      
<div>

<AuthContext>
<SignUp />


   <Signin />
   <ItemContext>
     <ListContext>
        <Router>

       <Switch>

<Route path="/setting">
<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/setting">Setting</Link>
            </li>
          </ul>
        </nav>
        </div>

<Setting />

</Route>



          <Route path="/">
   

    <ToDo />
          </Route>
          </Switch>

     
    </Router>
    </ListContext>
    </ItemContext>

 </AuthContext>

      </div>
   
  );
    ;
  }
  export default App;

