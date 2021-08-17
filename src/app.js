import React from 'react';

import ToDo from './components/todo/todo.js';
import  { useState } from 'react';
import Setting from './components/todo/Setting.js';


import { ItemContext } from './components/context/items';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function  App() {
  const [showcomplete, SetItems] = useState(false);
  const [Num, updateNum] = useState(false);

  function updateItems(value) {
    console.log("heeello context",value)
    SetItems(value)
  }


    return (
      
      <Router>
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
        <Switch>

<Route path="/setting">

<ItemContext.Provider 
value={{ showcomplete,updateItems,Num,updateNum }}>

<Setting />
</ItemContext.Provider>

</Route>


</Switch>

        <Switch>
          <Route path="/">
          <ItemContext.Provider
      value={{ showcomplete,updateItems,Num,updateNum }}>

    <ToDo />
    </ItemContext.Provider>
          </Route>
          </Switch>

     
      </div>
    </Router>

  );
    ;
  }
  export default App;

