import * as  actionTypes from './actionTypes';
import axios from '../../axios-order';

export const fetchPokemonStart = () =>{
    return{
        type: actionTypes.FETCH_POKEMON_START
    }
}

export const fetchPokemonSuccess =(data)=>{
    return{
        type: actionTypes.FETCH_POKEMON_SUCCESS,
        data: data
    }
}

export const fetchPokemonFailed =(err)=>{
    return{
        type: actionTypes.FETCH_POKEMON_SUCCESS,
        err:err
    }
}

export const fetchPokemon =()=>{
    return dispatch =>{
        dispatch(fetchPokemonStart);
        axios.get('/pokemon')
            .then(resp=>{
               dispatch(fetchPokemonSuccess(resp.data.results))
            })
            .catch(err=>{
                dispatch(fetchPokemonFailed(err))
            })
    }
}