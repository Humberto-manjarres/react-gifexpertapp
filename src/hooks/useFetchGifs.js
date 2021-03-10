import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// CUSTOM HOOKS
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(img =>{
                    //cada vez que el setState cambie los valores del state
                    //se dispara una renderización porq cambió la category
                    setstate({
                        data: img,
                        loading: false
                    });

            })
    }, [category])

    return state;    
}
