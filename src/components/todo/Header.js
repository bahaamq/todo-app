import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";


const Header = ({incomplete,setIncomplete}) => {


  
  return (
    <>
      <header>
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
        
        <h1>To Do List: {incomplete} items pending</h1>

     
      </header>

    </>
  );
};

export default Header;
