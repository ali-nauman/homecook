import React from 'react';

function Product(props) {
    return (
        <React.Fragment>
            <img alt={props.picture}></img>
            <h3>{props.name}</h3>
            <div>{props.price}</div>
            <div>{props.serving}</div>
        </React.Fragment>
    )
}

export default Product;