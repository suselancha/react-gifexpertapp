import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Se ejecuta solamente cuando la CATEGORIA cambia.
    //Sin useEffect, getGifs() se ejecuta cada vez que se renderize el componente.
    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                setTimeout( () => {
                    setState({
                        data:  imgs,
                        loading: false
                    });
                },3000 );
            })
    }, [category]) //Lista de dependencias

    return state;
    

}
