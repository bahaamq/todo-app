import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Header from './Header'
import Form from './Form'
import List from './List'
import { useContext } from 'react';

import { v4 as uuid } from 'uuid';

import { ItemContext } from '../context/items';
import { ListContext } from '../context/filterList';

const ToDo = () => {
	const { Num } = useContext(ItemContext);
	const { updateNum } = useContext(ItemContext);
  const { showcomplete } = useContext(ItemContext);
	const { updateItems } = useContext(ItemContext);


  console.log(Num ,"heelo list")
  const [list, setList] = useState([]);
const [incomplete, setIncomplete] = useState([]);
const [inlist, setinList] = useState([]);

const [Page, UpatePage] = useState(1); // next+1,,prev-1
const[Perpage,UpdatePerpage]=useState(2)

  //Not a state .. custom hook 
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);

  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });


 
 
     setList(items);

  }

  useEffect(() => {
    const show = localStorage.getItem('showcomplete')
    const savedNum =  localStorage.getItem('perpage')

console.log(savedNum)
console.log(show)

updateNum(savedNum)
updateItems(show)
    
    }, []);
  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
   // document.title = `To Do List: ${incomplete}`;


  }, [list]);

  return (
    <>
<Header incomplete={incomplete} setIncomplete={setIncomplete}/>

<Form handleChange={handleChange}  handleSubmit={handleSubmit}/>


{list.length >0 &&
<ListContext.Provider
      value={{ list, toggleComplete,setList,inlist,setinList,Page,UpatePage,Perpage,UpdatePerpage,Num }}
    >
<List />
    </ListContext.Provider>
}



    </>
  );
};

export default ToDo;
