import React from 'react';

import { urlImg } from '../../util/util'
import classes from './PokedexCmp.module.css'
import Aux from '../../hoc/Auxillary/Auxillary';


const PokedexCmp = (props) => {
    //console.log(props.data);
    let show = null;
    if (props.data) {
        show = <div className={classes.PokedexCmp} >
            {props.data.map((dt,i) => {
                let pokeImg 
                if(dt.id){
                    pokeImg = urlImg(dt.id);
                }else {
                pokeImg =urlImg(i+1)
                }
                //let type = dt.types;
                //let poped = type.slice(-1);
                return (
                    //<div className={[classes.items, classes[poped[0].type.name]].join(' ')}
                    <div className={[classes.items].join(' ')}
                        key={dt.name}
                        onClick={()=>props.clicked(dt,pokeImg)}
                    >
                        <img alt="pokemon img" src={pokeImg}></img>
                        <h1>{dt.name}</h1>
                    </div>
                )
            })}
        </div>
    }
    return (

        <Aux>
            {show}
        </Aux>
    )
}

export default PokedexCmp;