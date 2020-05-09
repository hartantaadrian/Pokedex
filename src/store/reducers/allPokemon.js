import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';


const initialState = {
    data: [],
    loading: false,
    err: false,
    errMessage: '',
    nextUrl: ''
}



const fetchStart = (state, action) => {
    return updateObject(state, { loading: true,err:false });
}


const fetchSuccess = (state, action) => {
   return  updateObject(state, { data: [...state.data,...action.data], nextUrl: action.nextUrl,loading: false, err: false })
}

const fetchFailed = (state, action) => {
    return updateObject(state, { loading: false, err: true, errMessage: action.errMsg })
}



const reducerAllPokemon = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_ALL_POKEMON_START): return fetchStart(state, action);
        case (actionTypes.FETCH_ALL_POKEMON_SUCCESS): return fetchSuccess(state, action);
        case (actionTypes.FETCH_ALL_POKEMON_FAILED): return fetchFailed(state, action);
        case(actionTypes.FETCH_MORE_ALL_POKEMON_SUCCESS) : return fetchSuccess(state, action);
        default: return state;
    }
}

export default reducerAllPokemon;