import React from 'react';

import classes from './PokeDetails.module.css';


const PokeDetail = (props) => {

    const datas = props.data

    return (
        <div className={classes.PokeDetails}>
            <h1>{datas.name}</h1>
            <div className={classes.Container}>
                <img alt="pokemon img" src={datas.img}></img>
                <div className={classes.detailContainer}>
                    <div>
                        <h2>Height:</h2>
                        <h2>{datas.height}</h2>
                    </div>
                    <div>
                        <h2>Weight:</h2>
                        <h2>{datas.weight}</h2>
                    </div>
                    <div>
                        <h2>Abbilites: </h2>
                        {datas.abilities.map(ability => {
                            return (
                                <h2
                                    className={classes.abilities}
                                    key={ability.ability.name}>
                                    {ability.ability.name}
                                </h2>
                            )
                        })}</div>
                    <div>
                        <h2>Type: </h2>
                        {datas.types.map(type => {
                            return (
                                <h2 key={type.type.name}
                                    className={[classes.PokeDetails, classes.type, classes[type.type.name]].join(' ')}>
                                    {type.type.name}
                                </h2>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeDetail