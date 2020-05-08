import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actionTypes from '../../store/actions/index';
import PokedexCmp from '../../Components/Pokedex/PokedexCmp';
import ButtonFilter from '../../Components/UI/Button/ButtonFilter/ButtonFilter';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './Pokedex.module.css';
import PokeDetail from '../../Components/Pokedex/PokeDetails/PokeDetails';
import { filterByType } from '../../util/util';
import Spinner from '../../Components/UI/Spinner/Spinner';


class Pokedex extends Component {


    state = {
        openModal: false,
        selectedPoke: [],
        clicked: false
    }

    onOpenModal = (dt, img) => {
        let merge = {
            ...dt,
            img: img
        }
        this.setState({ openModal: true, selectedPoke: merge, clicked: true })

    }

    onCloseModal = () => {
        this.setState({ openModal: false })
    }




    onFilterClick = (event, selectedType) => {
        //console.log(selectedType);
        let allPokes = this.props.data;
        let filtered = filterByType(allPokes, selectedType)
        //console.log(filtered)
        this.props.onFilterPokemon(filtered)
    }

    onRemoveFilter = () => {
        //console.log("remove")
        this.props.onFilterPokemon(this.props.data)
    }



    componentDidMount() {
        this.props.onFetchPokemon();
        this.props.onFetchPokemonType();
    }

    render() {
        let cmp = <Spinner />;
        let det = null;
      
        //console.log(this.props.loading)
        if (this.props.data) {
            if (this.props.isFilter) {
                cmp = <PokedexCmp
                    clicked={this.onOpenModal}
                    data={this.props.filterData} />
            }
            else {
                console.log("asdad")
                console.log(this.props.data)
              
                cmp = <PokedexCmp
                    clicked={this.onOpenModal}
                    data={this.props.data} />
            }
        }




        if (this.state.clicked) {
            det = <PokeDetail data={this.state.selectedPoke} />
        }
        let filter = null;
        if (this.props.pokemonType) {
            const pokemonTypes = this.props.pokemonType;
            filter = pokemonTypes.map(pokemonType => {
                return (
                    <ButtonFilter
                        removeFilter={this.onRemoveFilter}
                        clicked={(e) => this.onFilterClick(e, pokemonType.name)}
                        key={pokemonType.name} btnType={pokemonType.name}>{pokemonType.name}</ButtonFilter>
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
        pokemonType: state.pokemon.pokemonTypeList,
        isFilter: state.pokemon.isFilter,
        filterData: state.pokemon.filterData,
        loading: state.pokemon.loading,
        hasMore: state.pokemon.hasMore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPokemon: (limit,stat) => dispatch(actionTypes.fetchPokemon(limit,stat)),
        onFetchPokemonType: () => dispatch(actionTypes.fetchPokemonType()),
        onFilterPokemon: (show) => dispatch(actionTypes.filterPokemon(show))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);