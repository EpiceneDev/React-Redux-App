import react from 'react';

const Card = props => {

    return (
        <div className="card">
            <h1>{props.name}</h1>
            <h2>{props.city}, {props.state}</h2>
        </div>
    )
}