import React, { useState } from 'react'

export const AddCategory = ({ setNewCategory }) => {

    const [inputValue, setinputValue] = useState("Valorant")


    

   const onInputChange = ({ target }) => {

    setinputValue(target.value)
   
  }

  const onSubmit = ( e ) => {

    e.preventDefault()

    if(inputValue != ""){ 
      
      setNewCategory(inputValue)
      setinputValue("")
    
    }
  }

  return ( 
   <form action="" onSubmit={onSubmit}>
     <input type="text" name="" id="" value={inputValue} onChange={onInputChange} />
   </form>
  )
}
