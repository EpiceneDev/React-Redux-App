import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFacts } from '../actions';
import Card from './Card';

const List = props => {
    useEffect(() => {
        props.fetchFacts();
    }, []);
    console.log(props)

    if(props.isFetching) {
        // usually a spinner (react-loader-spinner)
        return <h2>Loading List...</h2>
    };

    return (
        <>
            {props.error && <p>{props.error}</p>}
            <p>{props.breweries.name}</p>   
        </>
    );
};

const mapStateToProps = state => {
    return {
        // example >> key: state.key,
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchFacts })(List);