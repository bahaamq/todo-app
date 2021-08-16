import { useState } from 'react';
import { useContext } from 'react';

import { ItemContext } from '../components/context/items';

const useForm = (callback) => {
  const { showcomplete } = useContext(ItemContext);

	const { updateItems } = useContext(ItemContext);

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
if(showcomplete)
{
console.log(showcomplete)
}
    callback(values);
  };

  const handleChange = (event) => {
    event.persist();
    if(event.target.name=='completed' && event.target.checked)
    {
      updateItems(true)

      setValues(values => ({ ...values, [event.target.name]:  event.target.checked
      }));
    }


    else if(event.target.name=='completed' ){
      updateItems(false)

    setValues(values => ({ ...values, [event.target.name]:  false
    }))
  }


    else
    {
   
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  }};

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
