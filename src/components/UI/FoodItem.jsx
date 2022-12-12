import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

export const FoodItem = ({ item, onClick }) => {
  const [servingSize, setServingSize] = useState(item.serving);

  const handleServingSizeChange = event => {
    const newSize = Number(event.target.value);

    if (newSize >= item.serving) {
      setServingSize(newSize);
    }
  };

  return (
    <Card className="mt-4" style={{ width: '18rem', backgroundColor: '#333' }}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + item.image}
        width="286"
        height="286"
      />
      <Card.Body>
        <Card.Title className="text-white mb-0">
          {item.name} - Rs. {item.price}
        </Card.Title>
        <small className="font-weight-bold d-inline text-white">
          (Serves {item.serving})
        </small>

        <div className="mt-1 text-white">Order for {servingSize}</div>

        <div className="d-flex gap-4 align-items-center">
          <Form.Range
            name="servingSize"
            min={item.serving}
            step={item.serving}
            value={servingSize}
            onChange={handleServingSizeChange}
          />

          <Button
            className="d-block ml-5 px-3"
            variant="primary"
            onClick={() => onClick(item, servingSize)}
          >
            Order
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
