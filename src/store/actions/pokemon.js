import * as  actionTypes from './actionTypes';
import axios from '../../axios-order';

export const fetchPokemonStart = () => {
    return {
        type: actionTypes.FETCH_POKEMON_START
    };
};
export const fetchPokemonSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POKEMON_SUCCESS,
        data: data
    }
}

export const fetchPokemonMore = (data) => {
    return {
        type: actionTypes.FETCH_POKEMON_MORE,
        data: data
    }
}

export const fetchPokemonFailed = (err) => {
    return {
        type: actionTypes.FETCH_POKEMON_FAILED,
        err: err
    }
}



export const fetchPokemon = (limit,stat) => {
    return dispatch => {
        dispatch(fetchPokemonStart());
        let finalData = []
        let promises = []
        for (let i = 1; i <= 151; i++) {
            promises.push(
                axios.get(`/pokemon/${i}`)
                    .then(reponses => {
                        finalData.push(reponses.data);
                        finalData.sort(function (a, b) { return a.id - b.id })
                    })
            )
        }
            Promise.all(promises).then(() =>
                dispatch(fetchPokemonSuccess(finalData))
            );
        
    }
}



export const fetchPokemonTypeStart = () => {
    return {
        type: actionTypes.FETCH_POKEMON_TYPE_START
    }
}

export const fetchPokemonTypeSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POKEMON_TYPE_SUCCESS,
        data: data
    }
}

export const fetchPokemonTypeFailed = (err) => {
    return {
        type: actionTypes.FETCH_POKEMON_TYPE_SUCCESS,
        err: err
    }
}

export const fetchPokemonType = () => {
    return dispatch => {
        dispatch(fetchPokemonStart);
        axios.get('/type')
            .then(resp => {
                resp.data.results.push({ name: "Remove Filter" })
                dispatch(fetchPokemonTypeSuccess(resp.data.results))
            })
            .catch(err => {
                dispatch(fetchPokemonTypeFailed(err))
            })
    }
}



export const filterPokemonDone = (data) => {
    return {
        type: actionTypes.FILTER_POKEMON_DONE,
        filterData: data
    }
}



export const filterPokemon = (data) => {
    return dispatch => {
        dispatch(fetchPokemonStart);
        dispatch(filterPokemonDone(data));
    }
}