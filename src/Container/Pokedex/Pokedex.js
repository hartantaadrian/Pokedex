import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/index';
import PokedexCmp from '../../Components/Pokedex/PokedexCmp';
import classes from './Pokedex.module.css';

class Pokedex extends Component {

    componentDidMount() {
        this.props.onFetchPokemon();
    }


    render() {
        let cmp = null;
        if (this.props.data) {
            cmp = <PokedexCmp data={this.props.data} />
        }
        return (
            <div className={classes.Pokedex}>
    

                {cmp}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.pokemon.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPokemon: () => dispatch(actionTypes.fetchPokemon())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);