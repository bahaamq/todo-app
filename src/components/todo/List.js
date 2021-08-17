import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { ItemContext } from '../context/items';
import { ListContext } from '../context/filterList';
import { Button } from "@blueprintjs/core";



const List = () => {

  const { list } = useContext(ListContext);
  const { toggleComplete } = useContext(ListContext);
  const { showcomplete } = useContext(ItemContext);
	const { updateItems } = useContext(ItemContext);

  const { Page } = useContext(ListContext);
  const { UpatePage } = useContext(ListContext);
  const { Perpage } = useContext(ListContext);
	const { Num } = useContext(ItemContext);
	const { updateNum } = useContext(ItemContext);
  const { UpdatePerpage } = useContext(ListContext);
    console.log(Num)

  function Next()
  {
    UpatePage(Page+1)
  }

  function Prev()
  {
    UpatePage(Page-1)
  }

//filtering list to show all completed/non completed tasks
const indexOfLastTodo = Page * Num;
const indexOfFirstTodo = indexOfLastTodo - Num;
const paginateTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);


console.log(indexOfLastTodo,indexOfFirstTodo)

  return (


    <>

  {
       showcomplete &&
       paginateTodos.map(item => (
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
       paginateTodos.map(item => (
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

{/* <button onClick={Prev}> Prev </button> */}

<Button intent="success" text="Prev" onClick={Prev}  /> 
<Button intent="success" text="Next" onClick={Next}  /> 


{/* <button onClick={Next}> Next </button> */}

    </>
  );
};

export default List;
