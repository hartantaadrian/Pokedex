import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact >Kanto</NavigationItem>

            <NavigationItem link="/Johto" >Johto</NavigationItem>

        </ul>
    )
};

export default navigationItems