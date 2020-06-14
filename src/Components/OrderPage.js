import React from 'react';

import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function getTotalCost(items) {
    let total = 0;

    items.forEach(element => {
        total += element.item.price * element.quantity;
    });

    return total;
}

const OrderPage = (props) => {
    const title = <h3>Order</h3>;
    const message = <p>Here you can view the details of your order</p>;

    if (props.orderItems.length === 0) {
        return (
            <div className="mx-4 mt-4">
                {title}
                <p>You have not added any items to your order yet! Go back to the <Link to="/">home page</Link> to add some items!</p>
            </div>
        );
    }

    const orderItems = props.orderItems.map((item, i = 0) =>
        <tr key={i}>
            <td>{++i}</td>
            <td>{item.item.name}</td>
            <td>{item.item.serving}</td>
            <td>Rs. {item.item.price}</td>
            <td>{item.quantity} (serves {item.item.serving * item.quantity})</td>
            <td>Rs. {item.quantity * item.item.price}</td>
        </tr>
    );

    return (
        <div className="mx-4 mt-4">
            {title}
            {message}

            <Table bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Serving</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    {orderItems}
                </tbody>

                <tfoot>
                    <tr>
                        <td className="text-right font-weight-bold" colSpan="5">Total</td>
                        <td>Rs. {getTotalCost(props.orderItems)}</td>
                    </tr>
                </tfoot>
            </Table>

            <div>
                <Link className="btn btn-primary" to="/checkout">Checkout</Link>
                <Link className="btn btn-outline-primary ml-4" to="/">Add More Items</Link>
            </div>
        </div>
    );
}

export default OrderPage;