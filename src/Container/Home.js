import React, { useEffect, useState,useCallback } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import * as actionTypes from '../store/actions/index';
import Spinner from '../Components/UI/Spinner/Spinner';
import PokedexCmp from '../Components/Pokedex/PokedexCmp';
import classes from './Home.module.css';



const Home = (props) => {
    const url = useState('/pokemon?limit=24')[0];
    const { onFetchAllPokemon, data, uriProps } = props;
    let cmp;

    const fetchAllPokemon =  useCallback(() => {
        onFetchAllPokemon(url);
      }, [onFetchAllPokemon,url]) 
      
    useEffect(() => {
       fetchAllPokemon()
    }, [fetchAllPokemon])

    const onOpenModal = () => {

    }

    const fetchMore = () => {
        
        props.onFetchMore(uriProps);
    }
        cmp = <PokedexCmp
            clicked={onOpenModal}
            data={data} />
    
    let loader = <Spinner />
   
    return (
        <div className={classes.Home}>
            <InfiniteScroll
                dataLength={data.length} //This is important field to render the next data
                next={fetchMore}
                hasMore={uriProps ? true : false}
                loader={loader}
            >
                <div> {cmp}</div>
            </InfiniteScroll>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        data: state.allPokemon.data,
        loading: state.allPokemon.loading,
        uriProps: state.allPokemon.nextUrl

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllPokemon: (url) => dispatch(actionTypes.fetchAllPokemon(url)),
        onFetchMore: (uri) => dispatch(actionTypes.fetchMorePokemon(uri))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

