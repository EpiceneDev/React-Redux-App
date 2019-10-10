import React from 'react';
import { connect } from 'react-redux';



const List = props => {
    if(props.isFetching) {
        // usually a spinner (react-loader-spinner)
        return <h2>Loading List...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.list.map(item => {
                <Card key={item.id}}
            })
        }     
        </div>
    )
};

const mapStateToProps = state => {
    return {
        // example >> key: state.key,
        list: state.list,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(List);