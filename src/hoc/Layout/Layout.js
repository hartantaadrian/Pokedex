import React, { Component } from 'react';
import {connect} from 'react-redux';

import classes from './Layout.module.css'
import Aux from '../Auxillary/Auxillary';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSide: false
    }

    SideDrawerOpenHandler = () => {
        this.setState({
            showSide: true
        })
    }
    SideDrawerClosedHandler = () => {
        this.setState((prevState) => {
            return {
                showSide: !prevState.showSide
            }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar 
                openSide={this.SideDrawerOpenHandler} />
                <SideDrawer
                 isAuth = {this.props.isAuth}
                open={this.state.showSide} closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default (Layout);