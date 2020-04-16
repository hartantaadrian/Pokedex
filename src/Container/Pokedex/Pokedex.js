import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/index';
import PokedexCmp from '../../Components/Pokedex/PokedexCmp';
import ButtonFilter from '../../Components/UI/Button/ButtonFilter/ButtonFilter';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './Pokedex.module.css';
import PokeDetail from '../../Components/Pokedex/PokeDetails/PokeDetails';


class Pokedex extends Component {


    state = {
        openModal: false,
        selectedPoke: [],
        clicked: false
    }

    onOpenModal = (dt,img) => {
        let merge = {
            ...dt,
            img:img
        }
        this.setState({ openModal: true ,selectedPoke: merge, clicked: true})

    }

    onCloseModal = () => {
        this.setState({ openModal: false })
    }

    componentDidMount() {
        this.props.onFetchPokemon();
        this.props.onFetchPokemonType();
    }

    render() {
        let cmp = null;
        let det = null;
        if (this.props.data) {
            cmp = <PokedexCmp
                clicked={this.onOpenModal}
                data={this.props.data} />
        }
        if(this.state.clicked){
            det = <PokeDetail data={this.state.selectedPoke}/>
        }
        let filter = null;
        if (this.props.pokemonType) {
            const pokemonTypes = this.props.pokemonType;
            filter = pokemonTypes.map(pokemonType => {
                return (
                    <ButtonFilter key={pokemonType.name} btnType={pokemonType.name}>{pokemonType.name}</ButtonFilter>
                )
            })
        }
        return (
            <div className={classes.Pokedex}>
                <Modal show={this.state.openModal} modalClosed={this.onCloseModal}>
                   {det}
                </Modal>
                <div className={classes.Filters}>
                    {filter}
                </div>
                {cmp}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.pokemon.data,
        pokemonType: state.pokemon.pokemonTypeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPokemon: () => dispatch(actionTypes.fetchPokemon()),
        onFetchPokemonType: () => dispatch(actionTypes.fetchPokemonType())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);