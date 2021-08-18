import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {AuthContext} from '../context/auth'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

const Form = ({handleChange,handleSubmit}) => {
  const userAuth = useContext(AuthContext);


console.log()
  return (
    <>
  <form onSubmit={handleSubmit}>

<h2>Add To Do Item</h2>

<label>
  <span>To Do Item</span>
  <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
</label>

<label>
  <span>Assigned To</span>
  <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
</label>

<label>
  <span>Difficulty</span>
  <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
</label>


<label>

{/* <button type="submit">Show items</button> */}

<If condition={userAuth.userCapibility}>
      <Then>
      <button type="submit">Add Item</button>
      </Then>
      <Else>
        <h3 className="not-ok">Sorry, you are not allowed to add item</h3>
      </Else>
    </If>
</label>
</form>



    </>
  );
};

export default Form;
