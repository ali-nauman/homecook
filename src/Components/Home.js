import React from 'react';

import FoodItemGrid from './FoodItemGrid';

const Home = (props) => {
    return (
        <>
            <h3 className="mt-4">HomeCook</h3>
            <p>Take a look at the variety of fresh, home-made food that we can deliver at your doorstep!</p>

            <FoodItemGrid foodItems={props.foodItems}></FoodItemGrid>
        </>
    );
}

export default Home;