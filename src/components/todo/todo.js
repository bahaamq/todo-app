import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useForm from '../../hooks/form.js';
import Header from './Header'
import Form from './Form'
import List from './List'
import { useContext } from 'react';

import { v4 as uuid } from 'uuid';

import { ItemContext } from '../context/items';
import { ListContext } from '../context/filterList';
import {AuthContext} from '../context/auth'

const ToDo = () => {
	const { Num } = useContext(ItemContext);
	const { updateNum } = useContext(ItemContext);
  const { showcomplete } = useContext(ItemContext);
	const { updateItems } = useContext(ItemContext);

  const userAuth = useContext(AuthContext);

  console.log(userAuth.loggedIn ,"heelo list")
  const [list, setList] = useState([]);
const [incomplete, setIncomplete] = useState([]);
const [inlist, setinList] = useState([]);

const [Page, UpatePage] = useState(1); // next+1,,prev-1
const[Perpage,UpdatePerpage]=useState(2)

  //Not a state .. custom hook 
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.complete = false;
// Add item to database
    axios({
      method: "post",
      url: "https://api-js401.herokuapp.com/api/v1/todo",
      data: item,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    
      setList([...list, item]);

  }

  function deleteItem(id) {

    console.log(id)
    const items = list.filter( item => item._id !== id );
    setList(items);

    axios({
      method: "delete",
      url: "https://api-js401.herokuapp.com/api/v1/todo/"+id,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
 console.log("deleted")
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  



  }

  function toggleComplete(id) {
    console.log(id)
// saving to db purpose
    let currentItem={}

    const allItems = list.map( item => {
      if ( item._id == id ) {
        console.log(item)
        item.complete = ! item.complete;
        currentItem=item
      }
      return item;

    });
console.log(allItems)
    setList(allItems)

    axios({
      method: "put",
      url: "https://api-js401.herokuapp.com/api/v1/todo/"+id,
      headers: { "Content-Type": "application/json" },
      data: {complete: currentItem.complete},
    })
      .then(function (response) {
        //handle success
 console.log(response.data)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  }


  useEffect(() => {
    if(localStorage.getItem('showcomplete'))
    {
      const show = localStorage.getItem('showcomplete')
      updateItems(show)

    }

    else
    {S
      updateItems('true')

    }
    if(localStorage.getItem('perpage'))
    {
      const savedNum =  localStorage.getItem('perpage')

      updateNum(savedNum)

    }
else
{
  updateNum(Perpage)

}




    axios({
      method: "get",
      url: "https://api-js401.herokuapp.com/api/v1/todo"
    })
      .then(function (response) {
        //handle success
        console.log(response.data.results);
        setList(response.data.results);

      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });


    
    }, []);
  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
   // document.title = `To Do List: ${incomplete}`;


  }, [list]);

  return (
    <>
    {userAuth.loggedIn &&
<Header incomplete={incomplete} setIncomplete={setIncomplete}/>
}

{userAuth.loggedIn &&

<Form handleChange={handleChange}  handleSubmit={handleSubmit}/>
}

{list.length >0 &&
userAuth.loggedIn &&
<ListContext.Provider
      value={{ list, toggleComplete,deleteItem,setList,inlist,setinList,Page,UpatePage,Perpage,UpdatePerpage,Num }}
    >
<List />
    </ListContext.Provider>



}
    </>
  );
};

export default ToDo;
