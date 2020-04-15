import React from 'react';

import { urlImg } from '../../util/util'
import classes from './PokedexCmp.module.css'


const PokedexCmp = (props) => {


    return (
        <div className={classes.PokedexCmp}>
            {props.data.map(dt => {
                let url = dt.url;
                let id = url.split("/");
                let pokeImg = urlImg(id[6]);
                return (
                    <div className={classes.items} key={id}>
                        <img src={pokeImg}></img>
                        <h1>{dt.name}</h1>
                    </div>
                )
            })}

        </div>
    )
}

export default PokedexCmp;