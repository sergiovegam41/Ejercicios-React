import React, { useEffect, useState } from 'react'
import { getGifs } from '../providers/fecths' 

function Category({category}) {

    const [images, setImagess ] = useState([]);
    
    const getImages = async ()=>{
        const resp = await getGifs(category)
        setImagess([...resp])

        
    }

    useEffect(() => {

        getImages()

    }, [ ])




  return (
    <>
    
        <h1>{category}</h1>
        <div>
        {images?.map((e)=>{
            return <>

                <img src={e.url} alt="" />
                <p>{e.title}</p>
            </>
                
        })}
        </div>
    

    </>
  )
}

export default Category