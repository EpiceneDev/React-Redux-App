import { VARIABLE_HERE } from '../actions'

const initialState ={

}

export const reducer = (state= initialState, action) => {
    switch(action.type) {
        case: START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case: FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                list: action.payload
            }
        case: FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}