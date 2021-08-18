import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import base64 from 'base-64';
import axios from 'axios';
import { useEffect,useState } from 'react';

export const ItemContext = React.createContext();
export default function Items(props)  {
    const [showcomplete, SetItems] = useState(false);
    const [Num, updateNum] = useState(false);

    function updateItems(value) {
      SetItems(value)
    }
return (
    <ItemContext.Provider
    value={{ showcomplete,updateItems,Num,updateNum }}>
    

    
     {props.children}
    </ItemContext.Provider>
  )}