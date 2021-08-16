import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { ItemContext } from '../context/items';
import { ListContext } from '../context/filterList';



const List = () => {
  const { showcomplete } = useContext(ItemContext);

  const { list } = useContext(ListContext);
  const { toggleComplete } = useContext(ListContext);

  const { Page } = useContext(ListContext);
  const { UpatePage } = useContext(ListContext);
  const { Perpage } = useContext(ListContext);
  const { UpdatePerpage } = useContext(ListContext);

  useEffect(() => {
   // document.title = `To Do List: ${incomplete}`;

  }, []);
//filtering list to show all completed/non completed tasks
const indexOfLastTodo = Page * Perpage;
const indexOfFirstTodo = indexOfLastTodo - Perpage;
const currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);

const renderTodos = currentTodos.map((todo, index) => {
  return <li key={index}>{todo} </li>;
});


  return (


    <>
  
  {
       showcomplete &&
       list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

{
       !showcomplete &&
  list.map(item => (
   item.complete==false  &&
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

{/* {

!showcomplete &&

list.map((item) => {
    if(item.complete){
<p>hekko</p>      
      }
      }
    )} */}



    </>
  );
};

export default List;
