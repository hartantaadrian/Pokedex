import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const intialState = {

    data: [],
    filterData: null,
    loading: false,
    err: null,
    pokemonTypeList: null,
    isFilter: false,
    hasMore: false
}


const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POKEMON_START:
            return updateObject(state, { loading: true });

        case actionTypes.FETCH_POKEMON_SUCCESS:
            return updateObject(state, { data: state.data.concat(action.data), loading: false, hasMore: false })
        case actionTypes.FETCH_POKEMON_FAILED:
            return updateObject(state, { loading: false, err: action.err, hasMore: false })
        case actionTypes.FETCH_POKEMON_MORE:
            return updateObject(state, {
                //purchased: true,
                data: state.data.concat(action.data),
                loading: false,
                hasMore: true
            })
        case actionTypes.FETCH_POKEMON_TYPE_START: return updateObject(state, { loading: false })
        case actionTypes.FETCH_POKEMON_TYPE_SUCCESS: return updateObject(state, { pokemonTypeList: action.data, loading: false })
        case actionTypes.FETCH_POKEMON_TYPE_FAILED: return updateObject(state, { loading: false, err: action.err })
        case actionTypes.FILTER_POKEMON_DONE: return updateObject(state, { filterData: action.filterData, isFilter: true })
        default: // need this for default case
            return state
    }
}

export default reducer;