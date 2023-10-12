import { ChangeEvent, FormEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

interface Props {
  address: { line1: string; line2: string };
  onFormValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

export const CheckoutForm = (props: Props) => {
  return (
    <Form className="d-flex flex-column gap-4 mt-4" onSubmit={props.onSubmit}>
      <Row>
        <Col md={4} className="d-flex flex-column gap-4">
          <Form.Group controlId="line1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="string"
              name="line1"
              value={props.address.line1}
              onChange={props.onFormValueChange}
            />
          </Form.Group>

          <Form.Group controlId="line2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="string"
              name="line2"
              value={props.address.line2}
              onChange={props.onFormValueChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <button className="btn btn-primary mt-3">Checkout</button>
        </Col>
      </Row>
    </Form>
  );
};
