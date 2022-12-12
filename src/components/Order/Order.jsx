import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HomeCookContext } from '../../store/home-cook-context';

function getTotalCost(items) {
  return items.reduce(
    (subTotal, item) => subTotal + item.price * item.quantity,
    0
  );
}

export const Order = () => {
  const { order, setOrder } = useContext(HomeCookContext);

  const title = <h3 className="text-white">Order</h3>;

  const deleteItem = id => {
    const newOrder = order.filter(i => i.id !== id);
    setOrder(newOrder);
  };

  if (order.length === 0) {
    return (
      <div className="mx-4 mt-4">
        {title}
        <p className="text-light">
          You have not added any items to your order yet! Go back to the{' '}
          <Link to="/">menu</Link> to add some items!
        </p>
      </div>
    );
  }

  const orderItems = order.map((item, i) => (
    <tr key={item.id} className="align-middle">
      <td>{++i}</td>
      <td>{item.name}</td>
      <td>Rs. {item.price}</td>
      <td>
        {item.quantity} (serves {item.serving * item.quantity})
      </td>
      <td>Rs. {item.quantity * item.price}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </td>
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
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{orderItems}</tbody>

          <tfoot>
            <tr>
              <td className="text-end fw-bold" colSpan={5}>
                Total
              </td>
              <td className="fw-bold">Rs. {getTotalCost(order)}</td>
            </tr>
          </tfoot>
        </Table>
      </div>

      <div className="d-flex gap-2 mt-3">
        <Link className="btn btn-primary d-inline-block" to="/checkout">
          Checkout
        </Link>
        <Link
          className="btn btn-secondary ml-4 text-light d-inline-block"
          to="/"
        >
          Add More Items
        </Link>
      </div>
    </div>
  );
};
