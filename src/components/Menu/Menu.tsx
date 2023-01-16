import { useContext, useEffect, useState } from 'react';
import { Col, Row, Toast, ToastContainer } from 'react-bootstrap';
import { OrderItem } from 'src/models';

import { HomeCookContext } from 'src/store';
import { FoodItem } from './FoodItem/FoodItem';

export const Menu = () => {
  const { order, setOrder, menu } = useContext(HomeCookContext);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (showToast) {
      timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 1500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showToast]);

  const toggleToast = () => {
    setShowToast(s => !s);
  };

  const addToOrder = (item: OrderItem, servingSize: number) => {
    const newOrder = [...order];
    const desiredItem = newOrder.find(orderItem => orderItem.id === item.id);

    if (desiredItem) {
      desiredItem.quantity = servingSize / item.serving;
    } else {
      item.quantity = servingSize / item.serving;
      newOrder.push(item);
    }

    setOrder(newOrder);
    setShowToast(true);
  };

  const currentMenu = menu.map(item => (
    <Col key={item.id} xs={12} sm={6} md={6} lg={4} xl={3}>
      <FoodItem key={item.id} item={item} onClick={addToOrder} />
    </Col>
  ));

  return (
    <>
      <div className="mx-4">
        <h3 className="mt-4">HomeCook</h3>
        <p>
          Take a look at the variety of fresh, home-made food that we can
          deliver at your doorstep!
        </p>

        <Row className="d-flex justify-content-between">{currentMenu}</Row>
      </div>

      <ToastContainer className="p-3" position="bottom-end">
        <Toast
          style={{ backgroundColor: '#333' }}
          show={showToast}
          onClose={toggleToast}
        >
          <Toast.Header>
            <strong className="me-auto">HomeCook</strong>
          </Toast.Header>
          <Toast.Body>Your order has been updated!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
