import axios from 'axios'

export const VARIABLE_HERE = 'VARIABLE_HERE';

const fetch = () => dispatch => {
        dispatch({ type: 'START_FETCHING'})
        //do some async action and dispatch an error or success action
        axios.get('url here')
        .then(res => dispatch({ type: '', payload: res.data }))
        .catch(err => dispatch({ type: '', payload: err.response }))
    }


//redux thunk
const thunk = next => action => store => {
    if (typeof action === 'object') {
        next(action); // forward ation untouched
        
    } else if (typeof action === 'function') {
        action() // stop the action and call the function
    }
}