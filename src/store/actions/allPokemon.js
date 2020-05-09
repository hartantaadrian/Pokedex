import * as actionTypes from './actionTypes';
import axios from '../../axios-order';


export const fetchAllPokemonStart = () => {
    return {
        type: actionTypes.FETCH_ALL_POKEMON_START,
    };
}

export const fetchAllPokemonSuccess = (data, nextUri) => {
    return {
        type: actionTypes.FETCH_ALL_POKEMON_SUCCESS,
        data: data,
        nextUrl: nextUri
    }
}

export const fetchMoreAllPokemonSuccess = (data, nextUri) => {
    return {
        type: actionTypes.FETCH_MORE_ALL_POKEMON_SUCCESS,
        data: data,
        nextUrl: nextUri
    }
}


export const fetchAllPokemonFailed = (errMsg) => {
    return {
        type: actionTypes.FETCH_ALL_POKEMON_FAILED,
        errMsg: errMsg
    }
}

export const fetchAllPokemon = (url) => {
    return dispatch => {
        dispatch(fetchAllPokemonStart());
        let finalData = [];
        axios.get(url)
            .then(response => {
                finalData = response.data.results
                const nextUrl = response.data.next
                //console.log(nextUrl)
                dispatch(fetchAllPokemonSuccess(finalData,nextUrl));
            })
            .catch(err => {
                dispatch(fetchAllPokemonFailed(err))
            })
    }
}

export const fetchMorePokemon = (url) => {
    return dispatch => {
        dispatch(fetchAllPokemonStart());
        let finalData = [];
        console.log(url)
        axios.get(url)
            .then(response => {
                finalData = response.data.results
                const nextUrl = response.data.next
                //console.log(nextUrl)
                dispatch(fetchMoreAllPokemonSuccess(finalData,nextUrl));
            })
            .catch(err => {
                dispatch(fetchAllPokemonFailed(err))
            })
    }
}