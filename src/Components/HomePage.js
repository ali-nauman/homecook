import React from 'react';

import Row from 'react-bootstrap/Row';

import FoodItemGrid from './FoodItemGrid';

const HomePage = (props) => {
    return (
        <div className="mx-4">
            <h3 className="mt-4">HomeCook</h3>
            <p>Take a look at the variety of fresh, home-made food that we can deliver at your doorstep!</p>

            <Row className="mt-5 d-flex justify-content-around">
                <FoodItemGrid foodItems={props.foodItems} onClick={props.onClick}></FoodItemGrid>
            </Row>
        </div>
    );
}

export default HomePage;