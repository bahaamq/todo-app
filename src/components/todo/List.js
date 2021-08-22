import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { ItemContext } from '../context/items';
import { ListContext } from '../context/filterList';
import { Button } from "@blueprintjs/core";
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import {AuthContext} from '../context/auth'



const List = () => {
  const userAuth = useContext(AuthContext);

  const { list } = useContext(ListContext);
  const { toggleComplete } = useContext(ListContext);
  const { deleteItem } = useContext(ListContext);

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
console.log(userAuth)

  return (


    <>

  {
       showcomplete &&
       paginateTodos.map(item => (
        <div key={item._id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <If condition={userAuth.userCapibility.includes("update")}>
          <Then>
          <h3 className="not-ok">Complete: ? {item.complete.toString()}</h3>
          <button onClick={() => toggleComplete(item._id)}>Update Complete </button>
                </Then>

          <Else>
        <h3 className="not-ok">Complesdte: ? {item.complete.toString()}</h3>
      </Else>
    </If>
    <If condition={userAuth.userCapibility.includes("delete")}>
          <Then>

    <button onClick={() => deleteItem(item._id)}>Delete item </button>
    </Then>
    </If>


          <hr />
        </div>
      ))}

{
       !showcomplete &&
       paginateTodos.map(item => (
   item.complete==false  &&
        <div key={item._id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
         

          <If condition={userAuth.userCapibility.includes["update"]}>
          <Then>
          <h3 className="not-ok">Complessdsdte: ? {item.complete.toString()}</h3>
          <button onClick={() => toggleComplete(item._id)}>Update Complete </button>
                </Then>

          <Else>
        <h3 className="not-ok">Compsslete: ? {item.complete.toString()}</h3>
      </Else>
    </If>
    <If condition={userAuth.userCapibility.includes("delete")}>
          <Then>

    <button onClick={() => deleteItem(item._id)}>Delete item </button>
    </Then>
    </If>

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
{Page > 1 &&
<Button intent="success" text="Prev" onClick={Prev}  /> }
<Button intent="success" text="Next" onClick={Next}  /> 


{/* <button onClick={Next}> Next </button> */}

    </>
  );
};

export default List;
