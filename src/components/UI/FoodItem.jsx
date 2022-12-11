import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const FoodItem = ({ item, onClick }) => {
  const [servingSize, setServingSize] = useState(item.serving);

  const handleServingSizeChange = (event) => {
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

        <div className="mt-1 text-white">Order for</div>

        <div className="d-flex justify-content-between">
          <input
            className="form-control w-50"
            id="servingSize"
            name="servingSize"
            type="number"
            min={item.serving}
            step={item.serving}
            value={servingSize}
            onChange={handleServingSizeChange}
          ></input>

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
