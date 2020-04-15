import React from 'react';

const PokedexCmp =(props)=>{
    console.log("props")
    console.log(props)
    return(
        <h1>{props.data[0].name}</h1>
    )
}

export default PokedexCmp;