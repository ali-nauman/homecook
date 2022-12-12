import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';

import { HomeCookContext } from 'store/home-cook-context';
import { FoodItem } from '../UI/FoodItem';

export const Menu = () => {
  const { order, setOrder, menu } = useContext(HomeCookContext);

  const addToOrder = (item, servingSize) => {
    const newOrder = [...order];
    const desiredItem = newOrder.find(orderItem => orderItem.id === item.id);

    if (desiredItem) {
      desiredItem.quantity = servingSize / item.serving;
    } else {
      item.quantity = servingSize / item.serving;
      newOrder.push(item);
    }

    setOrder(newOrder);
  };

  const currentMenu = menu.map(item => (
    <Col key={item.id} xs={12} sm={6} md={6} lg={4} xl={3}>
      <FoodItem key={item.id} item={item} onClick={addToOrder}></FoodItem>
    </Col>
  ));

  return (
    <div className="mx-4">
      <h3 className="mt-4 text-white">HomeCook</h3>
      <p className="text-light">
        Take a look at the variety of fresh, home-made food that we can deliver
        at your doorstep!
      </p>

      <Row className="d-flex justify-content-between">{currentMenu}</Row>
    </div>
  );
};
