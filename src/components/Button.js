import React,{useEffect, useState} from 'react'


export const Button = () => {
    const [state, setState] = useState(true)

    const changeButton = ()=>{
        setState(dato => !dato);
    }

    useEffect(() => {
        console.log(state);
    }, [state])


    return (
        <div className="card button">
          <button onClick={changeButton} type="button">Validar Boton</button> 
          <h1>{state ? 'TRUE': 'FALSE'}</h1>
        </div>
    )
}
