import React from 'react';

const Card = ({ name, city, state }) => {

    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>{city}, {state}</h2>
        </div>
    )
}

export default Card;