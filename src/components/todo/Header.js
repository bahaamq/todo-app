import React, { useEffect, useState } from 'react';


const Header = ({incomplete,setIncomplete}) => {


  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

    </>
  );
};

export default Header;
