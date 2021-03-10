import React, { useState } from 'react'
import PropTypes from 'prop-types';

// CUADRO DE TEXTO

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('');

    const handledInputChange = (e) => {
        setinputValue(e.target.value);

    }

    const handledSubmit = (e) => {
        e.preventDefault();//elimina el comportamiento refresh del url
        if (inputValue.trim().length < 2) {
            console.log('debe digitar un texto');
        } else {
            setCategories(categ => [ inputValue, ...categ]);
            setinputValue('');//colocamos el estado inicial del campo de texto vacio.
        }

        //console.log('Submit hecho')
    }
    return (
        <form onSubmit={handledSubmit}>
            <input type="text" value={inputValue} onChange={handledInputChange} />
        </form>
    )
}


AddCategory.prototype={
    setCategories: PropTypes.func.isRequired
}

