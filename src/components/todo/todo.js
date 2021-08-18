import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Header from './Header'
import Form from './Form'
import List from './List'
import { useContext } from 'react';

import { v4 as uuid } from 'uuid';

import ItemContext  from '../context/items';
import  ListContext  from '../context/filterList';
import {AuthContext} from '../context/auth'

const ToDo = () => {

  const userAuth = useContext(AuthContext);
  const lisContext = useContext(ListContext);

  console.log(userAuth.loggedIn ,"heelo list")
const [incomplete, setIncomplete] = useState([]);


  //Not a state .. custom hook 
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    lisContext.setList([...list, item]);

  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    lisContext.setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });


 
 
    lisContext.setList(items);

  }


  useEffect(() => {
    const show = localStorage.getItem('showcomplete')
    const savedNum =  localStorage.getItem('perpage')
console.log(lisContext)
console.log(savedNum)
console.log(show)

ItemContext.updateNum(savedNum)
ItemContext.updateItems(show)
    
    }, []);
  // useEffect(() => {
  //   let incompleteCount = list.filter(item => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //  // document.title = `To Do List: ${incomplete}`;


  // }, [lisContext.list]);

  return (
    <>
    {userAuth.loggedIn &&
<Header incomplete={incomplete} setIncomplete={setIncomplete}/>
}

{userAuth.loggedIn &&

<Form handleChange={handleChange}  handleSubmit={handleSubmit}/>
}

{
userAuth.loggedIn &&
<ListContext
    >
<List />
    </ListContext>



}
    </>
  );
};

export default ToDo;
