import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import base64 from 'base-64';
import axios from 'axios';
import { useEffect,useState } from 'react';

export const ListContext = React.createContext();
export default function List(props)  {
    const [list, setList] = useState([]);
    const [inlist, setinList] = useState([]);
    const [Page, UpatePage] = useState(1); // next+1,,prev-1
    const[Perpage,UpdatePerpage]=useState(2)

    

  
 
return (
    <ListContext.Provider
    value={{ list,setList,inlist,setinList,Page,UpatePage,Perpage,UpdatePerpage }}
 >


    
     {props.children}
    </ListContext.Provider>
  )}