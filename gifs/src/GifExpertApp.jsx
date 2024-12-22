import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['tech','lol'])

    console.log(categories)

    function _setNewCategory(){
        setCategories([...categories,'new'])
    }
  return (
   <>
   <h1> App </h1>

   <ol>
    { categories.map( category => {
        return <li key={category}>{category}</li>
    }) }
   </ol>

   <AddCategory/>

   <button onClick={_setNewCategory}>agregar</button>

   </>
  )
}
