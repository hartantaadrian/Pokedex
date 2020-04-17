import React from 'react';
import classes from './ButtonFilter.module.css';

const button = (props)=>(

    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={ props.children ==="Remove Filter" ? props.removeFilter :props.clicked}
    >{props.children}</button>
);

export default button;
