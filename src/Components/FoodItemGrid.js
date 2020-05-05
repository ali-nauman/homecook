import React from 'react';

import Col from 'react-bootstrap/Col';

import FoodItem from './FoodItem';

const FoodItemGrid = (props) => {
    const gridItems = props.foodItems.map((item) =>
        <Col key={item.id} sm={12} md={3}>
            <FoodItem
                key={item.id}
                item={item}
                onClick={props.onClick}
            ></FoodItem>
        </Col>
    );

    return (
        <>
            {gridItems}
        </>
    )
}

export default FoodItemGrid;