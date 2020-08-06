import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItems } from './GifGridItems';

export default function GifGrid({ category }) {

    const { data: images, loading } = useFetchGifs( category );

    console.log(loading);
    
    
    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading</p> }
            
            <div className="card-grid">
                    {
                        images.map( img => (                        
                            <GifGridItems 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}
