import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    // const [images, setimages] = useState([]);
    // useEffect(()=>{
    //     getGifs(category).then(setimages);
    // },[])

    const {data: images,loading} = useFetchGifs(category);
    
    

    

    //console.log('mostrar-->'+images.map(x => x.title))
    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="card animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                    {
                        images.map((img) =>(
                            <GifGridItem
                                key={img.id}
                                {...img} />
                        ))
                    }
                    
            </div>
        </>
    )
}
