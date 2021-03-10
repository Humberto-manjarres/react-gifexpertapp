import { useState } from "react";
import React from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//import { Button } from "./components/Button";

//LISTA ARRAYS

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <Button />  */}
            <ol>
                {
                    categories.map((elemento) => 
                        <GifGrid 
                            key={elemento}
                            category={elemento} 
                        /> 
                    )
                }
            </ol>
               
        </>
    )
}

//<li key={elemento}> {elemento}</li>
