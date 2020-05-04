import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import FoodItem from './FoodItem';

const FoodItemGrid = (props) => {
    const foodItems = props.foodItems.map((item) =>
        <Col>
            <FoodItem
                name={item.name}
                image={item.image}
                price={item.price}
                serving={item.serving}
            ></FoodItem>
        </Col>
    );

    return (
        <>
            <Row>
                {foodItems}
            </Row>
        </>
    )
}

export default FoodItemGrid;