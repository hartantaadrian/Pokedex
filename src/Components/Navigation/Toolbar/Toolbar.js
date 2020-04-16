import React from 'react';

import classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToogle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle openSide={props.openSide} />
        <div className={classes.Logo}>
        
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems  isAuth={props.isAuth}/>
        </nav>
    </header>
)

export default toolbar