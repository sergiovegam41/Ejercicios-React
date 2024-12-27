import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import Category from './components/Category'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['welcome'])

    // console.log(categories)

    function _setNewCategory(cat){
        setCategories([cat,...categories])
    }

  return (
   <>
   <h1> Gifs </h1>

    <AddCategory setNewCategory={_setNewCategory} />


            { categories.map( category => {
                return <Category key={category} category={category} />
        }) }




   </>
  )
}
