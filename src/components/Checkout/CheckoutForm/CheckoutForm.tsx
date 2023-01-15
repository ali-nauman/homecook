import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const CheckoutForm = () => {
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
  });

  const handleFormValueChange = event => {
    setAddress(f => ({ ...f, [event.target.name]: event.target.value.trim() }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!address.line1.length) return;

    alert(
      `Order confirmed! Your order will be shipped to ${address.line1}${
        address.line2.length ? `, ${address.line2}` : ''
      }!`
    );
  };

  return (
    <Form className="d-flex flex-column gap-4 mt-4" onSubmit={handleSubmit}>
      <Row>
        <Col md={4} className="d-flex flex-column gap-4">
          <Form.Group controlId="line1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="string"
              name="line1"
              value={address.line1}
              onChange={handleFormValueChange}
            />
          </Form.Group>

          <Form.Group controlId="line2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="string"
              name="line2"
              value={address.line2}
              onChange={handleFormValueChange}
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
