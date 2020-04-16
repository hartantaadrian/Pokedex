import * as  actionTypes from './actionTypes';
import axios from '../../axios-order';

export const fetchPokemonJohtoStart = () => {
    return {
        type: actionTypes.FETCH_POKEMON_JOHTO_START
    }
}

export const fetchPokemonJohtoSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POKEMON_JOHTO_SUCCESS,
        data: data
    }
}

export const fetchPokemonJohtoFailed = (err) => {
    return {
        type: actionTypes.FETCH_POKEMON_JOHTO_SUCCESS,
        err: err
    }
}


export const fetchPokemonJohto = () => {
    return dispatch => {
        dispatch(fetchPokemonJohtoStart);
        let finalData = []
        let promises = []
        for (let i = 151; i <= 251; i++) {
            promises.push(
                axios.get(`/pokemon/${i}`)
                    .then(reponses => {
                        finalData.push(reponses.data);
                        finalData.sort(function (a, b) { return a.id - b.id })
                    })
            )
        }
        Promise.all(promises).then(() =>
            dispatch(fetchPokemonJohtoSuccess(finalData)
            )
        );
    }
}

