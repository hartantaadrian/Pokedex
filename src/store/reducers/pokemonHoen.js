import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const intialState = {

    data: null,
    filterData: null,
    loading: false,
    err: null,
    pokemonTypeList: null,
    isFilter:false
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POKEMON_HOEN_START: return updateObject(state, { loading: false })
        case actionTypes.FETCH_POKEMON_HOEN_SUCCESS: return updateObject(state, { data: action.data, loading: false })
        case actionTypes.FETCH_POKEMON_HOEN_FAILED: return updateObject(state, { loading: false, err: action.err })
        case actionTypes.FILTER_POKEMON_HOEN_DONE: return updateObject(state, {filterData: action.filterData, isFilter:true})
        default: // need this for default case
            return state
    }
}

export default reducer;