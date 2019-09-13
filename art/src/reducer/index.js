import React from 'react';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTE_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
        case FETCHING_QUOTE_SUCCESS:
        return {
            ...state,
            isFetching: false,
            quote: action.payload
        };
        default:
        return state;
    }
}