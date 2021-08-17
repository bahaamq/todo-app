import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ItemContext } from '../context/items';



const Setting = () => {

    const { showcomplete } = useContext(ItemContext);
	const { updateItems } = useContext(ItemContext);
	const { Num } = useContext(ItemContext);
	const { updateNum } = useContext(ItemContext);

    function handleChange(e)
    {
        if(e.target.name=="completed" && e.target.checked)
         updateItems(true)

        else if(e.target.name=='completed' )
        updateItems(false)

       
        else
        updateNum(e.target.value)
    }


    function handleSubmit (e)
    {
        if (e) e.preventDefault();
        if(showcomplete)
        {
        console.log(showcomplete)
        }
        localStorage.setItem('showcomplete', showcomplete);
        localStorage.setItem('perpage', Num);
      
    }

 
  return (
    <>
  <form onSubmit={handleSubmit}>
<h2>Settings</h2>
<label>
  <span>how muuch task per page </span>
  <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
</label>


<label>
        <input type="checkbox"  onChange={handleChange} name="completed"/>
    show everything ?
      </label>
<label>
  <button type="submit">Save Settings</button>
</label>
</form>
    </>
  );
};

export default Setting;
