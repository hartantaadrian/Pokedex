import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact >Home</NavigationItem>
            <NavigationItem link="/Kanto" exact >Kanto</NavigationItem>
            <NavigationItem link="/Johto" >Johto</NavigationItem>
            <NavigationItem link="/Hoen" >Hoen</NavigationItem>
        </ul>
    )
};

export default navigationItems