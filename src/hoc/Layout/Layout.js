import React, { useState } from 'react';

import classes from './Layout.module.css'
import Aux from '../Auxillary/Auxillary';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';


const  Layout =(props)=> {
    const [showSide, setShowSide] = useState(false)
   

    const SideDrawerOpenHandler = () => {
       setShowSide(true)
    }
    const SideDrawerClosedHandler = () => {
        setShowSide(!showSide)
    }

        return (
            <Aux>
                <Toolbar 
                openSide={SideDrawerOpenHandler} />
                <SideDrawer
                 isAuth = {props.isAuth}
                open={showSide} closed={SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
    
}


export default (Layout);