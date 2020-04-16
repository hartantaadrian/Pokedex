import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const intialState = {
    data: null,
    loading: false,
    err: null,
    pokemonTypeList: null
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POKEMON_START: return updateObject(state, { loading: false })
        case actionTypes.FETCH_POKEMON_SUCCESS: return updateObject(state, { data: action.data, loading: false })
        case actionTypes.FETCH_POKEMON_FAILED: return updateObject(state, { loading: false, err: action.err })
        case actionTypes.FETCH_POKEMON_TYPE_START: return updateObject(state, { loading: false })
        case actionTypes.FETCH_POKEMON_TYPE_SUCCESS: return updateObject(state, { pokemonTypeList: action.data, loading: false })
        case actionTypes.FETCH_POKEMON_TYPE_FAILED: return updateObject(state, { loading: false, err: action.err })
        
        default: // need this for default case
            return state
    }
}

export default reducer;