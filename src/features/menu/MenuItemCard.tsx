import { ChangeEvent, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import { MenuItem } from './types';

interface Props {
  item: MenuItem;
  onClick: (item: MenuItem, servingSize: number) => void;
}

export const MenuItemCard = ({ item, onClick }: Props) => {
  const [servingSize, setServingSize] = useState(item.serving);

  const handleServingSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(event.target.value);

    if (newSize >= item.serving) {
      setServingSize(newSize);
    }
  };

  return (
    <Card
      className="mt-4 text-white"
      style={{ width: '18rem', backgroundColor: '#333' }}
    >
      <Card.Img
        variant="top"
        src={import.meta.env.BASE_URL + item.image}
        width="286"
        height="286"
      />
      <Card.Body>
        <Card.Title className="mb-0" data-testid="title">
          {item.name} - Rs. {item.price}
        </Card.Title>
        <small className="font-weight-bold d-inline" data-testid="subtitle">
          (Serves {item.serving})
        </small>

        <div className="mt-1" data-testid="selected-serving">
          Order for {servingSize}
        </div>

        <div className="d-flex gap-4 align-items-center">
          <Form.Range
            data-testid="serving-size-control"
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
