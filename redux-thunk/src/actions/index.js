import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchFacts = () => dispatch => {
    dispatch({ type: 'START_FETCHING'})
    //do some async action and dispatch an error or success action
    axios.get('https://api.openbrewerydb.org/breweries?by_state=oregon')
        .then(res => {
            console.log("API RETURN: ", res.data);
            dispatch({ type: '', payload: res.data });
        })
        .catch(err => dispatch({ type: '', payload: err.response })
    )
}


//redux thunk
// const thunk = next => action => store => {
//     if (typeof action === 'object') {
//         next(action); // forward action untouched
        
//     } else if (typeof action === 'function') {
//         action() // stop the action and call the function
//     }
// }