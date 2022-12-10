import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const FoodItem = (props) => {
  const [servingSize, setServingSize] = useState(props.serving);

  const handleServingSizeChange = (event) => {
    const newSize = Number(event.target.value);

    if (newSize >= props.serving) {
      setServingSize(newSize);
    }
  };

  return (
    <Card className="mt-4 bg-dark" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + props.image}
        width="286"
        height="286"
      />
      <Card.Body>
        <Card.Title className="text-white">{props.name}</Card.Title>
        <div className="font-weight-bold text-white">Rs. {props.price}</div>

        <div className="font-weight-bold d-inline text-white">
          Serves:{' '}
          <div className="font-weight-normal d-inline">{props.serving}</div>
        </div>

        <div className="mt-1 text-white">Order for</div>

        <form className="form-inline">
          <input
            className="form-control w-50"
            id="servingSize"
            name="servingSize"
            type="number"
            min={props.serving}
            step={props.serving}
            value={servingSize}
            onChange={handleServingSizeChange}
          ></input>

          <Button
            className="d-block ml-5 px-3"
            variant="primary"
            onClick={() =>
              props.onClick(
                {
                  id: props.id,
                  name: props.name,
                  image: props.image,
                  price: props.price,
                  serving: props.serving,
                  availableOnDay: props.availableOnDay,
                },
                servingSize
              )
            }
          >
            Order
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};
