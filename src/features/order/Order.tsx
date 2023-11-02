import { useContext, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { OrderItem } from '@features/order/types';
import { HomeCookContext } from '@store/home-cook-context';

export const Order = () => {
  const { order, setOrder } = useContext(HomeCookContext);
  const [itemToDelete, setItemToDelete] = useState<OrderItem | null>(null);

  const [show, setShow] = useState(false);

  const title = <h3>Order</h3>;

  const handleDelete = (item: OrderItem) => {
    setShow(true);
    setItemToDelete(item);
  };

  const handleDeleteConfirmed = () => {
    const newOrder = order.filter(i => i.id !== itemToDelete?.id);
    setOrder(newOrder);
    setItemToDelete(null);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (order.length === 0) {
    return (
      <div className="mx-4 mt-4">
        {title}
        <p>
          You have not added any items to your order yet! Go back to the{' '}
          <Link to="/">menu</Link> to add some items!
        </p>
      </div>
    );
  }

  return (
    <div className="mx-4 mt-4">
      {title}
      <p>Here you can view the details of your order</p>

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

          <tbody>
            {order.map((item, i) => (
              <tr key={item.id} className="align-middle">
                <td>{++i}</td>
                <td>{item.name}</td>
                <td>Rs. {item.price}</td>
                <td>
                  {item.quantity} (serves {item.serving * item.quantity})
                </td>
                <td>Rs. {item.quantity * item.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td className="text-end fw-bold" colSpan={5}>
                Total
              </td>
              <td className="fw-bold">
                Rs.{' '}
                {order.reduce(
                  (subTotal, item) => subTotal + item.price * item.quantity,
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>

      <div className="d-flex gap-2 mt-3">
        <Link className="btn btn-primary d-inline-block" to="/checkout">
          Checkout
        </Link>
        <Link className="btn btn-secondary ml-4 d-inline-block" to="/">
          Add More Items
        </Link>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <em>{itemToDelete?.name}</em> from
          your order?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmed}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
