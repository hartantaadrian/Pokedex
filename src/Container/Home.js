import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import * as actionTypes from '../store/actions/index';
import Spinner from '../Components/UI/Spinner/Spinner';
import PokedexCmp from '../Components/Pokedex/PokedexCmp';



const Home = (props) => {
    const url = useState('/pokemon?limit=48')[0];
    const [hasMores, setHasMores] = useState(false);
    const { onFetchAllPokemon, data, loading, uriProps } = props;
    let cmp;

    useEffect(() => {
        onFetchAllPokemon(url);
    }, [])

    const onOpenModal = () => {

    }

    const fetchMore = () => {
        console.log(data)
        props.onFetchMore(uriProps);
    }
        cmp = <PokedexCmp
            clicked={onOpenModal}
            data={data} />
    
    let loader = <Spinner />
    console.log(uriProps)
    return (
        <React.Fragment>
            <InfiniteScroll
                dataLength={data.length} //This is important field to render the next data
                next={fetchMore}
                hasMore={uriProps ? true : false}
                loader={loader}
            >
                <div> {cmp}</div>
            </InfiniteScroll>
        </React.Fragment>

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

