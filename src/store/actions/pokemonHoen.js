import * as  actionTypes from './actionTypes';
import axios from '../../axios-order';

export const fetchPokemonHoenStart = () => {
    return {
        type: actionTypes.FETCH_POKEMON_HOEN_START
    }
}

export const fetchPokemonHoenSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POKEMON_HOEN_SUCCESS,
        data: data
    }
}

export const fetchPokemonHoenFailed = (err) => {
    return {
        type: actionTypes.FETCH_POKEMON_HOEN_SUCCESS,
        err: err
    }
}


export const fetchPokemonHoen = () => {
    return dispatch => {
        dispatch(fetchPokemonHoenStart);
        let finalData = []
        let promises = []
        for (let i = 252; i <= 386; i++) {
            promises.push(
                axios.get(`/pokemon/${i}`)
                    .then(reponses => {
                        finalData.push(reponses.data);
                        finalData.sort(function (a, b) { return a.id - b.id })
                    })
            )
        }
        Promise.all(promises).then(() =>
            dispatch(fetchPokemonHoenSuccess(finalData)
            )
        );
    }
}



export const filterPokemonHoenDone = (data) => {
    return {
        type: actionTypes.FILTER_POKEMON_HOEN_DONE,
        filterData: data
    }
}



export const filterPokemonHoen =(data)=>{
    return dispatch => {
        dispatch(fetchPokemonHoenStart);
        dispatch(filterPokemonHoenDone(data));
    }
}
