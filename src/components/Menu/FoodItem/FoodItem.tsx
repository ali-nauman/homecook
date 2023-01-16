import PropTypes from 'prop-types';
import { ChangeEvent, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { MenuItem, OrderItem } from 'src/models';

interface Props {
  item: MenuItem;
  onClick: (item: OrderItem, servingSize: number) => void;
}

export const FoodItem = ({ item, onClick }: Props) => {
  const [servingSize, setServingSize] = useState(item.serving);

  const handleServingSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        <Card.Title className="mb-0">
          {item.name} - Rs. {item.price}
        </Card.Title>
        <small className="font-weight-bold d-inline">
          (Serves {item.serving})
        </small>

        <div className="mt-1">Order for {servingSize}</div>

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
            onClick={() => onClick(item as OrderItem, servingSize)}
          >
            Order
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

FoodItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
