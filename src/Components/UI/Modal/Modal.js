import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import BackDrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentWillUpdate(){
        //console.log("Update Modal")
    }

    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} click={this.props.modalClosed} />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className={classes.Modal}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;