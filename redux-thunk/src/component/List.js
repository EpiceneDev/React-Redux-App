import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFacts } from '../actions';
import Card from './Card';

const List = props => {
    useEffect(() => {
        props.fetchFacts();
    }, []);

    if(props.isFetching) {
        // usually a spinner (react-loader-spinner)
        return <h2>Loading List...</h2>
    };

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {/* {props.item.map(item => {
                <Card key={item.id} {...item} />
            })}     */}
        </div>
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

export default connect(mapStateToProps, {fetch})(List);