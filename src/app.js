import React from 'react';
import { useContext } from 'react';

import ToDo from './components/todo/todo.js';
import  { useState } from 'react';
import Setting from './components/todo/Setting.js';
import SignUp from './components/auth/Signup'
import Signin from './components/auth/Signin'
import AuthContext from './components/context/auth'

import { ItemContext } from './components/context/items';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function  App() {

  const [showcomplete, SetItems] = useState(false);
  const [Num, updateNum] = useState(5);

  function updateItems(value) {
    console.log("heeello context",value)
    SetItems(value)
  }

    return (
      
<div>

<AuthContext>
<SignUp />


   <Signin />
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
<ItemContext.Provider 
value={{ showcomplete,updateItems,Num,updateNum }}>

<Setting />
</ItemContext.Provider>

</Route>



          <Route path="/">
          <ItemContext.Provider
      value={{ showcomplete,updateItems,Num,updateNum }}>

    <ToDo />
    </ItemContext.Provider>
          </Route>
          </Switch>

     
    </Router>


 </AuthContext>

      </div>
   
  );
    ;
  }
  export default App;

