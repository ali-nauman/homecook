import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FoodItem } from './FoodItem';

export const HomePage = (props) => {
  const menu = props.menu.map((item) => (
    <Col key={item.id} xs={12} sm={6} md={6} lg={4} xl={3}>
      <FoodItem
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        serving={item.serving}
        availableOnDay={item.availableOnDay}
        onClick={props.onClick}
      ></FoodItem>
    </Col>
  ));

  return (
    <div className="mx-4">
      <h3 className="mt-4 text-white">HomeCook</h3>
      <p className="text-light">
        Take a look at the variety of fresh, home-made food that we can deliver
        at your doorstep!
      </p>

      <Row className="d-flex justify-content-between">{menu}</Row>
    </div>
  );
};
