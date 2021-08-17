import React from 'react';

import ToDo from './components/todo/todo.js';
import  { useState } from 'react';


import { ItemContext } from './components/context/items';

export function  App() {
  const [showcomplete, SetItems] = useState(false);

  function updateItems(value) {
    console.log("heeello context",value)
    SetItems(value)
  }


    return (
      

      <ItemContext.Provider
      value={{ showcomplete,updateItems }}
    >

<ToDo />

    </ItemContext.Provider>
  );
    ;
  }
  export default App;

