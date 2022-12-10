import React from 'react';

import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function getTotalCost(items) {
  return items.reduce(
    (subTotal, item) => subTotal + item.price * item.quantity,
    0
  );
}

const OrderPage = (props) => {
  const title = <h3 className="text-white">Order</h3>;

  if (props.orderItems.length === 0) {
    return (
      <div className="mx-4 mt-4">
        {title}
        <p className="text-light">
          You have not added any items to your order yet! Go back to the{' '}
          <Link to="/">home page</Link> to add some items!
        </p>
      </div>
    );
  }

  const orderItems = props.orderItems.map((item, i = 0) => (
    <tr key={i}>
      <td>{++i}</td>
      <td>{item.name}</td>
      <td>Rs. {item.price}</td>
      <td>
        {item.quantity} (serves {item.serving * item.quantity})
      </td>
      <td>Rs. {item.quantity * item.price}</td>
    </tr>
  ));

  return (
    <div className="mx-4 mt-4">
      {title}
      <p className="text-light">Here you can view the details of your order</p>

      <div className="table-responsive">
        <Table bordered hover className="table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>{orderItems}</tbody>

          <tfoot>
            <tr>
              <td className="text-right font-weight-bold" colSpan="4">
                Total
              </td>
              <td className="font-weight-bold">
                Rs. {getTotalCost(props.orderItems)}
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>

      <div className="mt-3">
        <Link className="btn btn-primary" to="/checkout">
          Checkout
        </Link>
        <Link className="btn btn-outline-primary ml-4 text-light" to="/">
          Add More Items
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
